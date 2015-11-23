<div id="wikitext">

<span id="excerpt"></span> autoinsert is a standard package included in
the Emacs distribution. It provides a mechanism to automatically insert
text into a newly created file. <span id="excerptend"></span>

The autoinsert mechanism is based on matching a filename spec with a
template, and possibly some code to tweak the contents of the template
to the local situation.

Autoinsert has some preexisting content, but is not enabled by default.
To enable it, add `(auto-insert-mode t)` to you `.emacs` file.

<div class="vspace">

</div>

Extending auto insertion functions
----------------------------------

Autoinsert has a nifty feature that lets you specify an elisp function
to execute on the buffer after the template has been inserted into the
new file. This allows you to customize the inserted template to the file
being created, such as adding comments including the file name, author,
email, copyright, and such information.

I've created a configuration file that i load in my `.emacs` file:

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="lisp">

<div class="head">

conf-autoinsert.el

</div>

1.  <div class="de1">

    <span class="co1">;; auto-insert stuff</span>

    </div>

2.  <div class="de1">

    <span class="co1">;; From
    http://www.emacswiki.org/emacs/AutoInsertMode</span>

    </div>

3.  <div class="de1">

     

    </div>

4.  <div class="de1">

    <span class="co1">;;; Commentary:</span>

    </div>

5.  <div class="de2">

     

    </div>

6.  <div class="de1">

    <span class="co1">;; Provides for inserting standard file templates
    with variable</span>

    </div>

7.  <div class="de1">

    <span class="co1">;; substitution based on the file's type (given by
    it's extention).</span>

    </div>

8.  <div class="de1">

    <span class="co1">;; </span>

    </div>

9.  <div class="de1">

    <span class="co1">;; New templates should go into the directory
    specified by </span>

    </div>

10. <div class="de2">

    <span class="co1">;; \`auto-insert-directory' and added to the
    \`auto-insert-alist'</span>

    </div>

11. <div class="de1">

    <span class="co1">;; variable.</span>

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

    <span class="co1">;;; Code:</span>

    </div>

14. <div class="de1">

     

    </div>

15. <div class="de2">

    <span class="br0">(</span>require 'autoinsert<span
    class="br0">)</span>

    </div>

16. <div class="de1">

    <span class="br0">(</span>auto-insert-mode t<span
    class="br0">)</span>

    </div>

17. <div class="de1">

    <span class="br0">(</span><span class="kw1">setq</span>
    auto-insert-query <span class="kw1">nil</span><span
    class="br0">)</span>

    </div>

18. <div class="de1">

    <span class="br0">(</span><span class="kw1">setq</span>
    auto-insert-directory <span class="br0">(</span>expand-file-<span
    class="kw1">name</span> <span
    class="st0">"\~/.emacs.d/file-templates/"</span><span
    class="br0">)</span><span class="br0">)</span>

    </div>

19. <div class="de1">

     

    </div>

20. <div class="de2">

    <span class="co1">;; Set the alist of file type and actions to take
    when encountered</span>

    </div>

21. <div class="de1">

    <span class="co1">;; Node format:</span>

    </div>

22. <div class="de1">

    <span class="co1">;;   ((file-type-regex . description)
    [template-name customizing-function])</span>

    </div>

23. <div class="de1">

    <span class="co1">;;</span>

    </div>

24. <div class="de1">

    <span class="co1">;; file-type-regex (regex) -- how to determine
    which template to use</span>

    </div>

25. <div class="de2">

    <span class="co1">;; description (string) -- file type
    description</span>

    </div>

26. <div class="de1">

    <span class="co1">;; template-name (string) -- file name (within
    \`auto-insert-directory')</span>

    </div>

27. <div class="de1">

    <span class="co1">;; customizing-function (function) -- name of
    function that will run</span>

    </div>

28. <div class="de1">

    <span class="co1">;;    when the auto insert occurs. This is where
    you set up the variable</span>

    </div>

29. <div class="de1">

    <span class="co1">;;    substititutions.</span>

    </div>

30. <div class="de2">

     

    </div>

31. <div class="de1">

    <span class="br0">(</span>add-to-<span class="kw1">list</span>
    'auto-insert-alist

    </div>

32. <div class="de1">

             '<span class="br0">(</span><span class="br0">(</span><span
    class="st0">"<span class="es0">\\\\</span>.[Cc][Pp][Pp]\$"</span>
    <span class="sy0">.</span> <span class="st0">"C++ Files"</span><span
    class="br0">)</span> <span class="sy0">.</span>

    </div>

33. <div class="de1">

               <span class="br0">[</span><span
    class="st0">"insert.cpp"</span> auto-update-c-source-file<span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

34. <div class="de1">

     

    </div>

35. <div class="de2">

    <span class="br0">(</span>add-to-<span class="kw1">list</span>
    'auto-insert-alist

    </div>

36. <div class="de1">

             '<span class="br0">(</span><span class="br0">(</span><span
    class="st0">"<span class="es0">\\\\</span>.[Hh]\$"</span> <span
    class="sy0">.</span> <span class="st0">"C/C++ Header
    Files"</span><span class="br0">)</span> <span class="sy0">.</span>

    </div>

37. <div class="de1">

               <span class="br0">[</span><span
    class="st0">"insert.h"</span> auto-update-header-file<span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

38. <div class="de1">

     

    </div>

39. <div class="de1">

    <span class="br0">(</span>add-to-<span class="kw1">list</span>
    'auto-insert-alist

    </div>

40. <div class="de2">

             '<span class="br0">(</span><span class="br0">(</span><span
    class="st0">"<span class="es0">\\\\</span>.[Cc]\$"</span> <span
    class="sy0">.</span> <span class="st0">"C files"</span><span
    class="br0">)</span> <span class="sy0">.</span>

    </div>

41. <div class="de1">

               <span class="br0">[</span><span
    class="st0">"insert.c"</span> auto-update-c-source-file<span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

42. <div class="de1">

     

    </div>

43. <div class="de1">

    <span class="br0">(</span>add-to-<span class="kw1">list</span>
    'auto-insert-alist

    </div>

44. <div class="de1">

             '<span class="br0">(</span><span class="br0">(</span><span
    class="st0">"<span class="es0">\\\\</span>.[Ss][Hh]\$"</span> <span
    class="sy0">.</span> <span class="st0">"Shell Script"</span><span
    class="br0">)</span> <span class="sy0">.</span>

    </div>

45. <div class="de2">

               <span class="br0">[</span><span
    class="st0">"insert.sh"</span> auto-update-other-source-file<span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

46. <div class="de1">

     

    </div>

47. <div class="de1">

    <span class="br0">(</span>add-to-<span class="kw1">list</span>
    'auto-insert-alist

    </div>

48. <div class="de1">

             '<span class="br0">(</span><span class="br0">(</span><span
    class="st0">"<span
    class="es0">\\\\</span>.[Pp][Hh][Pp][345]?\$"</span> <span
    class="sy0">.</span> <span class="st0">"PHP Script"</span><span
    class="br0">)</span> <span class="sy0">.</span>

    </div>

49. <div class="de1">

               <span class="br0">[</span><span
    class="st0">"insert.php"</span> auto-update-other-source-file<span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

50. <div class="de2">

     

    </div>

51. <div class="de1">

    <span class="br0">(</span>add-to-<span class="kw1">list</span>
    'auto-insert-alist

    </div>

52. <div class="de1">

             '<span class="br0">(</span><span class="br0">(</span><span
    class="st0">"<span class="es0">\\\\</span>.[Pp][Ll]\$"</span> <span
    class="sy0">.</span> <span class="st0">"Perl Script"</span><span
    class="br0">)</span> <span class="sy0">.</span>

    </div>

53. <div class="de1">

               <span class="br0">[</span><span
    class="st0">"insert.pl"</span> auto-update-other-source-file<span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

54. <div class="de1">

     

    </div>

55. <div class="de2">

    <span class="br0">(</span>add-to-<span class="kw1">list</span>
    'auto-insert-alist

    </div>

56. <div class="de1">

             '<span class="br0">(</span><span class="br0">(</span><span
    class="st0">"<span class="es0">\\\\</span>.[Cc][Ss][Ss]\$"</span>
    <span class="sy0">.</span> <span class="st0">"Cascading Style
    Sheet"</span><span class="br0">)</span> <span class="sy0">.</span>

    </div>

57. <div class="de1">

            <span class="br0">[</span><span
    class="st0">"insert.css"</span> auto-update-other-source-file<span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

58. <div class="de1">

     

    </div>

59. <div class="de1">

    <span class="br0">(</span>add-to-<span class="kw1">list</span>
    'auto-insert-alist

    </div>

60. <div class="de2">

             '<span class="br0">(</span><span class="br0">(</span><span
    class="st0">"<span
    class="es0">\\\\</span>.[Ss]?[Hh][Tt][Mm][Ll]?\$"</span> <span
    class="sy0">.</span> <span class="st0">"HTML Page"</span><span
    class="br0">)</span> <span class="sy0">.</span>

    </div>

61. <div class="de1">

            <span class="br0">[</span><span
    class="st0">"insert.html"</span> auto-update-other-source-file<span
    class="br0">]</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

62. <div class="de1">

     

    </div>

63. <div class="de1">

    <span class="co1">;(setq auto-insert 'other)</span>

    </div>

64. <div class="de1">

     

    </div>

65. <div class="de2">

     

    </div>

66. <div class="de1">

     

    </div>

67. <div class="de1">

    <span class="co1">;; Handle substitutions for .h files (used in
    C/C++)</span>

    </div>

68. <div class="de1">

    <span class="co1">;; function replaces the string '@@@' by the
    current file</span>

    </div>

69. <div class="de1">

    <span class="co1">;; name. You could use a similar approach to
    insert name and date into</span>

    </div>

70. <div class="de2">

    <span class="co1">;; your file.</span>

    </div>

71. <div class="de1">

    <span class="br0">(</span><span class="kw1">defun</span>
    auto-update-header-file <span class="br0">(</span><span
    class="br0">)</span>

    </div>

72. <div class="de1">

      <span class="br0">(</span>save-excursion

    </div>

73. <div class="de1">

        <span class="br0">(</span>while <span
    class="br0">(</span>search-forward <span class="st0">"@@@"</span>
    <span class="kw1">nil</span> t<span class="br0">)</span>

    </div>

74. <div class="de1">

          <span class="br0">(</span>save-restriction

    </div>

75. <div class="de2">

        <span class="br0">(</span>narrow-to-region <span
    class="br0">(</span>match-beginning <span class="nu0">0</span><span
    class="br0">)</span> <span class="br0">(</span>match-end <span
    class="nu0">0</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

76. <div class="de1">

        <span class="br0">(</span>replace-match <span
    class="br0">(</span>upcase <span
    class="br0">(</span>file-name-nondirectory buffer-file-<span
    class="kw1">name</span><span class="br0">)</span><span
    class="br0">)</span><span class="br0">)</span>

    </div>

77. <div class="de1">

        <span class="br0">(</span>subst-char-in-region <span
    class="br0">(</span>point-<span class="kw1">min</span><span
    class="br0">)</span> <span class="br0">(</span>point-<span
    class="kw1">max</span><span class="br0">)</span> ?<span
    class="sy0">.</span> ?\_<span class="br0">)</span>

    </div>

78. <div class="de1">

        <span class="br0">)</span><span class="br0">)</span>

    </div>

79. <div class="de1">

        <span class="br0">)</span>

    </div>

80. <div class="de2">

      <span class="br0">)</span>

    </div>

81. <div class="de1">

     

    </div>

82. <div class="de1">

    <span class="co1">;; Handle substitutions for .c/.cpp files</span>

    </div>

83. <div class="de1">

    <span class="br0">(</span><span class="kw1">defun</span>
    auto-update-c-source-file <span class="br0">(</span><span
    class="br0">)</span>

    </div>

84. <div class="de1">

      <span class="br0">(</span>save-excursion

    </div>

85. <div class="de2">

        <span class="co1">;; Replace HHHH with file name sans
    suffix</span>

    </div>

86. <div class="de1">

        <span class="br0">(</span>while <span
    class="br0">(</span>search-forward <span class="st0">"HHHH"</span>
    <span class="kw1">nil</span> t<span class="br0">)</span>

    </div>

87. <div class="de1">

          <span class="br0">(</span>save-restriction

    </div>

88. <div class="de1">

        <span class="br0">(</span>narrow-to-region <span
    class="br0">(</span>match-beginning <span class="nu0">0</span><span
    class="br0">)</span> <span class="br0">(</span>match-end <span
    class="nu0">0</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

89. <div class="de1">

        <span class="br0">(</span>replace-match <span
    class="br0">(</span>concat <span
    class="br0">(</span>file-name-sans-extension <span
    class="br0">(</span>file-name-nondirectory buffer-file-<span
    class="kw1">name</span><span class="br0">)</span><span
    class="br0">)</span> <span class="st0">".h"</span><span
    class="br0">)</span> t

    </div>

90. <div class="de2">

                   <span class="br0">)</span>

    </div>

91. <div class="de1">

        <span class="br0">)</span><span class="br0">)</span>

    </div>

92. <div class="de1">

        <span class="br0">)</span>

    </div>

93. <div class="de1">

      <span class="br0">(</span>save-excursion

    </div>

94. <div class="de1">

        <span class="co1">;; Replace @@@ with file name</span>

    </div>

95. <div class="de2">

        <span class="br0">(</span>while <span
    class="br0">(</span>search-forward <span class="st0">"@@@"</span>
    <span class="kw1">nil</span> t<span class="br0">)</span>

    </div>

96. <div class="de1">

          <span class="br0">(</span>save-restriction

    </div>

97. <div class="de1">

        <span class="br0">(</span>narrow-to-region <span
    class="br0">(</span>match-beginning <span class="nu0">0</span><span
    class="br0">)</span> <span class="br0">(</span>match-end <span
    class="nu0">0</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

98. <div class="de1">

        <span class="br0">(</span>replace-match <span
    class="br0">(</span>file-name-nondirectory buffer-file-<span
    class="kw1">name</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

99. <div class="de1">

        <span class="br0">)</span><span class="br0">)</span>

    </div>

100. <div class="de2">

        <span class="br0">)</span>

    </div>

101. <div class="de1">

      <span class="br0">(</span>save-excursion

    </div>

102. <div class="de1">

        <span class="co1">;; replace DDDD with today's date</span>

    </div>

103. <div class="de1">

        <span class="br0">(</span>while <span
    class="br0">(</span>search-forward <span class="st0">"DDDD"</span>
    <span class="kw1">nil</span> t<span class="br0">)</span>

    </div>

104. <div class="de1">

          <span class="br0">(</span>save-restriction

    </div>

105. <div class="de2">

        <span class="br0">(</span>narrow-to-region <span
    class="br0">(</span>match-beginning <span class="nu0">0</span><span
    class="br0">)</span> <span class="br0">(</span>match-end <span
    class="nu0">0</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

106. <div class="de1">

        <span class="br0">(</span>replace-match <span
    class="st0">""</span><span class="br0">)</span>

    </div>

107. <div class="de1">

        <span class="br0">(</span>insert-today<span class="br0">)</span>

    </div>

108. <div class="de1">

        <span class="br0">)</span><span class="br0">)</span>

    </div>

109. <div class="de1">

        <span class="br0">)</span>

    </div>

110. <div class="de2">

      <span class="br0">)</span>

    </div>

111. <div class="de1">

     

    </div>

112. <div class="de1">

    <span class="co1">;; Handle substitutions for other types of
    files</span>

    </div>

113. <div class="de1">

    <span class="co1">;; Standard update to templates</span>

    </div>

114. <div class="de1">

    <span class="co1">;; Replaces the following strings:</span>

    </div>

115. <div class="de2">

    <span class="co1">;;  @@AUTHOR@@ -- user's full name</span>

    </div>

116. <div class="de1">

    <span class="co1">;;  @@AUTHOREMAIL@@ -- users email address</span>

    </div>

117. <div class="de1">

    <span class="co1">;;  @@FILENAMENS@@ -- file name without
    extension</span>

    </div>

118. <div class="de1">

    <span class="co1">;;  @@FILENAME@@ -- file name</span>

    </div>

119. <div class="de1">

    <span class="co1">;;  @@TODAY@@ -- today's date</span>

    </div>

120. <div class="de2">

    <span class="co1">;;  @@YEAR@@ -- current year</span>

    </div>

121. <div class="de1">

    <span class="co1">;;  @@ORGANIZATION@@ -- value of envar
    ORGANIZATION</span>

    </div>

122. <div class="de1">

    <span class="br0">(</span><span class="kw1">defun</span>
    auto-update-other-source-file <span class="br0">(</span><span
    class="br0">)</span>

    </div>

123. <div class="de1">

      <span class="br0">(</span>save-excursion

    </div>

124. <div class="de1">

        <span class="co1">;; Replace @@AUTHOR@@ with user's full
    name</span>

    </div>

125. <div class="de2">

        <span class="br0">(</span>while <span
    class="br0">(</span>search-forward <span
    class="st0">"@@AUTHOR@@"</span> <span class="kw1">nil</span> t<span
    class="br0">)</span>

    </div>

126. <div class="de1">

          <span class="br0">(</span>save-restriction

    </div>

127. <div class="de1">

        <span class="br0">(</span>narrow-to-region <span
    class="br0">(</span>match-beginning <span class="nu0">0</span><span
    class="br0">)</span> <span class="br0">(</span>match-end <span
    class="nu0">0</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

128. <div class="de1">

        <span class="br0">(</span>replace-match user-full-<span
    class="kw1">name</span> t<span class="br0">)</span>

    </div>

129. <div class="de1">

        <span class="br0">)</span><span class="br0">)</span>

    </div>

130. <div class="de2">

        <span class="br0">)</span>

    </div>

131. <div class="de1">

      <span class="br0">(</span>save-excursion

    </div>

132. <div class="de1">

        <span class="co1">;; Replace @@AUTHOREMAIL@@ with user's email
    address</span>

    </div>

133. <div class="de1">

        <span class="br0">(</span>while <span
    class="br0">(</span>search-forward <span
    class="st0">"@@AUTHOREMAIL@@"</span> <span class="kw1">nil</span>
    t<span class="br0">)</span>

    </div>

134. <div class="de1">

          <span class="br0">(</span>save-restriction

    </div>

135. <div class="de2">

        <span class="br0">(</span>narrow-to-region <span
    class="br0">(</span>match-beginning <span class="nu0">0</span><span
    class="br0">)</span> <span class="br0">(</span>match-end <span
    class="nu0">0</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

136. <div class="de1">

        <span class="br0">(</span>replace-match user-mail-address t<span
    class="br0">)</span>

    </div>

137. <div class="de1">

        <span class="br0">)</span><span class="br0">)</span>

    </div>

138. <div class="de1">

        <span class="br0">)</span>

    </div>

139. <div class="de1">

      <span class="br0">(</span>save-excursion

    </div>

140. <div class="de2">

        <span class="co1">;; Replace @@FILENAMENS@@ with file name sans
    suffix</span>

    </div>

141. <div class="de1">

        <span class="br0">(</span>while <span
    class="br0">(</span>search-forward <span
    class="st0">"@@FILENAMENS@@"</span> <span class="kw1">nil</span>
    t<span class="br0">)</span>

    </div>

142. <div class="de1">

          <span class="br0">(</span>save-restriction

    </div>

143. <div class="de1">

        <span class="br0">(</span>narrow-to-region <span
    class="br0">(</span>match-beginning <span class="nu0">0</span><span
    class="br0">)</span> <span class="br0">(</span>match-end <span
    class="nu0">0</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

144. <div class="de1">

        <span class="br0">(</span>replace-match <span
    class="br0">(</span>file-name-sans-extension <span
    class="br0">(</span>file-name-nondirectory buffer-file-<span
    class="kw1">name</span><span class="br0">)</span><span
    class="br0">)</span> t<span class="br0">)</span>

    </div>

145. <div class="de2">

        <span class="br0">)</span><span class="br0">)</span>

    </div>

146. <div class="de1">

        <span class="br0">)</span>

    </div>

147. <div class="de1">

      <span class="br0">(</span>save-excursion

    </div>

148. <div class="de1">

        <span class="co1">;; Replace @@FILENAME@@ with file name</span>

    </div>

149. <div class="de1">

        <span class="br0">(</span>while <span
    class="br0">(</span>search-forward <span
    class="st0">"@@FILENAME@@"</span> <span class="kw1">nil</span>
    t<span class="br0">)</span>

    </div>

150. <div class="de2">

          <span class="br0">(</span>save-restriction

    </div>

151. <div class="de1">

        <span class="br0">(</span>narrow-to-region <span
    class="br0">(</span>match-beginning <span class="nu0">0</span><span
    class="br0">)</span> <span class="br0">(</span>match-end <span
    class="nu0">0</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

152. <div class="de1">

        <span class="br0">(</span>replace-match <span
    class="br0">(</span>file-name-nondirectory buffer-file-<span
    class="kw1">name</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

153. <div class="de1">

        <span class="br0">)</span><span class="br0">)</span>

    </div>

154. <div class="de1">

        <span class="br0">)</span>

    </div>

155. <div class="de2">

      <span class="br0">(</span>save-excursion

    </div>

156. <div class="de1">

        <span class="co1">;; replace @@TODAY@@ with today's date</span>

    </div>

157. <div class="de1">

        <span class="br0">(</span>while <span
    class="br0">(</span>search-forward <span
    class="st0">"@@TODAY@@"</span> <span class="kw1">nil</span> t<span
    class="br0">)</span>

    </div>

158. <div class="de1">

          <span class="br0">(</span>save-restriction

    </div>

159. <div class="de1">

        <span class="br0">(</span>narrow-to-region <span
    class="br0">(</span>match-beginning <span class="nu0">0</span><span
    class="br0">)</span> <span class="br0">(</span>match-end <span
    class="nu0">0</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

160. <div class="de2">

        <span class="br0">(</span>replace-match <span
    class="st0">""</span><span class="br0">)</span>

    </div>

161. <div class="de1">

        <span class="br0">(</span>insert-today<span class="br0">)</span>

    </div>

162. <div class="de1">

        <span class="br0">)</span><span class="br0">)</span>

    </div>

163. <div class="de1">

        <span class="br0">)</span>

    </div>

164. <div class="de1">

      <span class="br0">(</span>save-excursion

    </div>

165. <div class="de2">

        <span class="co1">;; replace @@YEAR@@ with today's date</span>

    </div>

166. <div class="de1">

        <span class="br0">(</span>while <span
    class="br0">(</span>search-forward <span
    class="st0">"@@YEAR@@"</span> <span class="kw1">nil</span> t<span
    class="br0">)</span>

    </div>

167. <div class="de1">

          <span class="br0">(</span>save-restriction

    </div>

168. <div class="de1">

        <span class="br0">(</span>narrow-to-region <span
    class="br0">(</span>match-beginning <span class="nu0">0</span><span
    class="br0">)</span> <span class="br0">(</span>match-end <span
    class="nu0">0</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

169. <div class="de1">

        <span class="br0">(</span>replace-match <span
    class="st0">""</span><span class="br0">)</span>

    </div>

170. <div class="de2">

        <span class="br0">(</span>insert-year<span class="br0">)</span>

    </div>

171. <div class="de1">

        <span class="br0">)</span><span class="br0">)</span>

    </div>

172. <div class="de1">

        <span class="br0">)</span>

    </div>

173. <div class="de1">

      <span class="br0">(</span>save-excursion

    </div>

174. <div class="de1">

        <span class="co1">;; replace @@ORGANIZATION@@ with today's
    date</span>

    </div>

175. <div class="de2">

        <span class="br0">(</span>while <span
    class="br0">(</span>search-forward <span
    class="st0">"@@ORGANIZATION@@"</span> <span class="kw1">nil</span>
    t<span class="br0">)</span>

    </div>

176. <div class="de1">

          <span class="br0">(</span>save-restriction

    </div>

177. <div class="de1">

        <span class="br0">(</span>narrow-to-region <span
    class="br0">(</span>match-beginning <span class="nu0">0</span><span
    class="br0">)</span> <span class="br0">(</span>match-end <span
    class="nu0">0</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

178. <div class="de1">

        <span class="br0">(</span>replace-match <span
    class="st0">""</span><span class="br0">)</span>

    </div>

179. <div class="de1">

        <span class="br0">(</span>insert <span
    class="br0">(</span>getenv <span
    class="st0">"ORGANIZATION"</span><span class="br0">)</span><span
    class="br0">)</span>

    </div>

180. <div class="de2">

        <span class="br0">)</span><span class="br0">)</span>

    </div>

181. <div class="de1">

        <span class="br0">)</span>

    </div>

182. <div class="de1">

     

    </div>

183. <div class="de1">

     

    </div>

184. <div class="de1">

      <span class="br0">)</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.AutoInsert?action=sourceblock&num=1)

</div>

</div>

A sample template looks like this:

<div class="vspace">

</div>

<div id="sourceblock2" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

insert.php

</div>

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

    <span class="co4">/\*\*</span>

    </div>

3.  <div class="de1">

    <span class="co4"> \*</span>

    </div>

4.  <div class="de1">

    <span class="co4"> \* @@FILENAMENS@@</span>

    </div>

5.  <div class="de2">

    <span class="co4"> \*</span>

    </div>

6.  <div class="de1">

    <span class="co4"> \* Author: @@AUTHOR@@ \<@@AUTHOREMAIL@@\></span>

    </div>

7.  <div class="de1">

    <span class="co4"> \* Created: @@TODAY@@</span>

    </div>

8.  <div class="de1">

    <span class="co4"> \* Copyright (c) @@YEAR@@ @@ORGANIZATION@@</span>

    </div>

9.  <div class="de1">

    <span class="co4"> \*</span>

    </div>

10. <div class="de2">

    <span class="co4"> \*/</span>

    </div>

11. <div class="de1">

     

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

    <span class="co4">/\*\*</span>

    </div>

14. <div class="de1">

    <span class="co4"> \* DOC BLOCK</span>

    </div>

15. <div class="de2">

    <span class="co4"> \*/</span>

    </div>

16. <div class="de1">

     

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.AutoInsert?action=sourceblock&num=2)

</div>

</div>

The `auto-update-other-source-file` function takes care of substituting
the appropriate values in the template, resulting in something like the
following:

<div class="vspace">

</div>

<div id="sourceblock3" class="sourceblock">

<div class="sourceblocktext">

<div class="php">

<div class="head">

sample.php

</div>

1.  <div class="de1">

    <span class="kw2">\<?php</span>

    </div>

2.  <div class="de1">

    <span class="co4">/\*\*</span>

    </div>

3.  <div class="de1">

    <span class="co4"> \*</span>

    </div>

4.  <div class="de1">

    <span class="co4"> \* sample</span>

    </div>

5.  <div class="de2">

    <span class="co4"> \*</span>

    </div>

6.  <div class="de1">

    <span class="co4"> \* Author: Tamara Temple
    \<tamara@tamaratemple.com\></span>

    </div>

7.  <div class="de1">

    <span class="co4"> \* Created: 2011/10/07</span>

    </div>

8.  <div class="de1">

    <span class="co4"> \* Copyright (c) 2011 Tamara Temple Web
    Development</span>

    </div>

9.  <div class="de1">

    <span class="co4"> \*</span>

    </div>

10. <div class="de2">

    <span class="co4"> \*/</span>

    </div>

11. <div class="de1">

     

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

    <span class="co4">/\*\*</span>

    </div>

14. <div class="de1">

    <span class="co4"> \* DOC BLOCK</span>

    </div>

15. <div class="de2">

    <span class="co4"> \*/</span>

    </div>

</div>

</div>

<div class="sourceblocklink">

[raw
code](http://wiki.tamouse.org?n=Technology.AutoInsert?action=sourceblock&num=3)

</div>

</div>

Combined with <span
class="wikiword">[YaSnippets](http://wiki.tamouse.org?n=Technology.YaSnippets?action=print)</span>,
autoinsert is quite the gem!

<div class="vspace">

</div>

</div>
