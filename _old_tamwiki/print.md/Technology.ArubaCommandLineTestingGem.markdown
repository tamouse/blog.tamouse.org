<div id="wikitext">

<div style="display: none;">

Summary:aruba is a ruby gem that in conjunction with cucumber makes
testing ruby command line applications much easier
Parent:(Technology.)Ruby <span
class="wikiword">[IncludeMe](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)[?](http://wiki.tamouse.org?n=Technology.IncludeMe?action=edit)</span>:[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
Categories:[HowTos](http://wiki.tamouse.org?n=Category.HowTos) Tags:
ruby, command line, testing, cucumber, aruba

</div>

<span id="excerpt"></span> I have been trying to learn how to use aruba
in testing a command line ruby application, as described in the
[methadone](http://davetron5000.github.com/methadone/) site. There seems
to be little to go on out there. I was getting frustrated until I found
out where the nifty steps are implmenented. <span
id="excerptend"></span>

<div class="vspace">

</div>

Aruba, and Cucumber
-------------------

[Cucumber](http://wiki.tamouse.org?n=Technology.Cucumber?action=edit)[?](http://wiki.tamouse.org?n=Technology.Cucumber?action=edit)
is a great feature testing tool for
[Ruby](http://wiki.tamouse.org?n=Technology.Ruby?action=print)
applications. It is used extensively in
[RubyOnRails](http://wiki.tamouse.org?n=Technology.RubyOnRails?action=print)
web applications, and for many gems.

I have started to write a command line application for work and started
using the methadone gem, which makes things pretty sweet. It uses
cucumber and [Aruba](https://github.com/cucumber/aruba) to drive the
cucumber feature tests.

The problem was, I didn't know the step definitions, and couldn't figure
out where they were. I finally, after much digging, discovered that
under the gem's `lib/aruba` directory, was a file called `cucumber.rb`
which, lo and behold, contained all the things I was looking for.

Here is the set of defined steps from that
[file](https://github.com/cucumber/aruba/blob/master/lib/aruba/cucumber.rb):

<div class="vspace">

</div>

<div id="sourceblock1" class="sourceblock">

<div class="sourceblocktext">

<div class="text">

1.  <div class="de1">

    Given /The default aruba timeout is (\\d+) seconds/ do |seconds|

    </div>

2.  <div class="de1">

      @aruba\_timeout\_seconds = seconds.to\_i

    </div>

3.  <div class="de1">

    end

    </div>

4.  <div class="de1">

     

    </div>

5.  <div class="de2">

    Given /\^I'm using a clean gemset "([\^"]\*)"\$/ do |gemset|

    </div>

6.  <div class="de1">

      use\_clean\_gemset(gemset)

    </div>

7.  <div class="de1">

    end

    </div>

8.  <div class="de1">

     

    </div>

9.  <div class="de1">

    Given /\^a directory named "([\^"]\*)"\$/ do |dir\_name|

    </div>

10. <div class="de2">

      create\_dir(dir\_name)

    </div>

11. <div class="de1">

    end

    </div>

12. <div class="de1">

     

    </div>

13. <div class="de1">

    Given /\^a file named "([\^"]\*)" with:\$/ do |file\_name,
    file\_content|

    </div>

14. <div class="de1">

      write\_file(file\_name, file\_content)

    </div>

15. <div class="de2">

    end

    </div>

16. <div class="de1">

     

    </div>

17. <div class="de1">

    Given /\^a (\\d+) byte file named "([\^"]\*)"\$/ do |file\_size,
    file\_name|

    </div>

18. <div class="de1">

      write\_fixed\_size\_file(file\_name, file\_size.to\_i)

    </div>

19. <div class="de1">

    end

    </div>

20. <div class="de2">

     

    </div>

21. <div class="de1">

    Given /\^an empty file named "([\^"]\*)"\$/ do |file\_name|

    </div>

22. <div class="de1">

      write\_file(file\_name, "")

    </div>

23. <div class="de1">

    end

    </div>

24. <div class="de1">

     

    </div>

25. <div class="de2">

    When /\^I write to "([\^"]\*)" with:\$/ do |file\_name,
    file\_content|

    </div>

26. <div class="de1">

      write\_file(file\_name, file\_content)

    </div>

27. <div class="de1">

    end

    </div>

28. <div class="de1">

     

    </div>

29. <div class="de1">

    When /\^I overwrite "([\^"]\*)" with:\$/ do |file\_name,
    file\_content|

    </div>

30. <div class="de2">

      overwrite\_file(file\_name, file\_content)

    </div>

31. <div class="de1">

    end

    </div>

32. <div class="de1">

     

    </div>

33. <div class="de1">

    When /\^I append to "([\^"]\*)" with:\$/ do |file\_name,
    file\_content|

    </div>

34. <div class="de1">

      append\_to\_file(file\_name, file\_content)

    </div>

35. <div class="de2">

    end

    </div>

36. <div class="de1">

     

    </div>

37. <div class="de1">

    When /\^I append to "([\^"]\*)" with "([\^"]\*)"\$/ do |file\_name,
    file\_content|

    </div>

38. <div class="de1">

      append\_to\_file(file\_name, file\_content)

    </div>

39. <div class="de1">

    end

    </div>

40. <div class="de2">

     

    </div>

41. <div class="de1">

    When /\^I remove the file "([\^"]\*)"\$/ do |file\_name|

    </div>

42. <div class="de1">

      remove\_file(file\_name)

    </div>

43. <div class="de1">

    end

    </div>

44. <div class="de1">

     

    </div>

45. <div class="de2">

    When /\^I cd to "([\^"]\*)"\$/ do |dir|

    </div>

46. <div class="de1">

      cd(dir)

    </div>

47. <div class="de1">

    end

    </div>

48. <div class="de1">

     

    </div>

49. <div class="de1">

    When /\^I run "(.\*)"\$/ do |cmd|

    </div>

50. <div class="de2">

      warn(%{\\e[35m    The /\^I run "(.\*)"\$/ step definition is
    deprecated. Please use the \`backticks\` version\\e[0m})

    </div>

51. <div class="de1">

      run\_simple(unescape(cmd), false)

    </div>

52. <div class="de1">

    end

    </div>

53. <div class="de1">

     

    </div>

54. <div class="de1">

    When /\^I run \`([\^\`]\*)\`\$/ do |cmd|

    </div>

55. <div class="de2">

      run\_simple(unescape(cmd), false)

    </div>

56. <div class="de1">

    end

    </div>

57. <div class="de1">

     

    </div>

58. <div class="de1">

    When /\^I successfully run "(.\*)"\$/ do |cmd|

    </div>

59. <div class="de1">

      warn(%{\\e[35m    The  /\^I successfully run "(.\*)"\$/ step
    definition is deprecated. Please use the \`backticks\`
    version\\e[0m})

    </div>

60. <div class="de2">

      run\_simple(unescape(cmd))

    </div>

61. <div class="de1">

    end

    </div>

62. <div class="de1">

     

    </div>

63. <div class="de1">

    \#\# I successfully run \`echo -n "Hello"\`

    </div>

64. <div class="de1">

    \#\# I successfully run \`sleep 29\` for up to 30 seconds

    </div>

65. <div class="de2">

    When /\^I successfully run \`(.\*?)\`(?: for up to (\\d+)
    seconds)?\$/ do |cmd, secs|

    </div>

66. <div class="de1">

      run\_simple(unescape(cmd), true, secs && secs.to\_i)

    </div>

67. <div class="de1">

    end

    </div>

68. <div class="de1">

     

    </div>

69. <div class="de1">

    When /\^I run "([\^"]\*)" interactively\$/ do |cmd|

    </div>

70. <div class="de2">

      warn(%{\\e[35m    The /\^I run "([\^"]\*)" interactively\$/ step
    definition is deprecated. Please use the \`backticks\`
    version\\e[0m})

    </div>

71. <div class="de1">

      run\_interactive(unescape(cmd))

    </div>

72. <div class="de1">

    end

    </div>

73. <div class="de1">

     

    </div>

74. <div class="de1">

    When /\^I run \`([\^\`]\*)\` interactively\$/ do |cmd|

    </div>

75. <div class="de2">

      run\_interactive(unescape(cmd))

    </div>

76. <div class="de1">

    end

    </div>

77. <div class="de1">

     

    </div>

78. <div class="de1">

    When /\^I type "([\^"]\*)"\$/ do |input|

    </div>

79. <div class="de1">

      type(input)

    </div>

80. <div class="de2">

    end

    </div>

81. <div class="de1">

     

    </div>

82. <div class="de1">

    When /\^I wait for (?:output|stdout) to contain "([\^"]\*)"\$/ do
    |expected|

    </div>

83. <div class="de1">

      Timeout::timeout(exit\_timeout) do

    </div>

84. <div class="de1">

        loop do

    </div>

85. <div class="de2">

          break if assert\_partial\_output\_interactive(expected)

    </div>

86. <div class="de1">

          sleep 0.1

    </div>

87. <div class="de1">

        end

    </div>

88. <div class="de1">

      end

    </div>

89. <div class="de1">

    end

    </div>

90. <div class="de2">

     

    </div>

91. <div class="de1">

    Then /\^the output should contain "([\^"]\*)"\$/ do |expected|

    </div>

92. <div class="de1">

      assert\_partial\_output(expected, all\_output)

    </div>

93. <div class="de1">

    end

    </div>

94. <div class="de1">

     

    </div>

95. <div class="de2">

    Then /\^the output from "([\^"]\*)" should contain "([\^"]\*)"\$/ do
    |cmd, expected|

    </div>

96. <div class="de1">

      assert\_partial\_output(expected, output\_from(cmd))

    </div>

97. <div class="de1">

    end

    </div>

98. <div class="de1">

     

    </div>

99. <div class="de1">

    Then /\^the output from "([\^"]\*)" should not contain
    "([\^"]\*)"\$/ do |cmd, unexpected|

    </div>

100. <div class="de2">

      assert\_no\_partial\_output(unexpected, output\_from(cmd))

    </div>

101. <div class="de1">

    end

    </div>

102. <div class="de1">

     

    </div>

103. <div class="de1">

    Then /\^the output should not contain "([\^"]\*)"\$/ do |unexpected|

    </div>

104. <div class="de1">

      assert\_no\_partial\_output(unexpected, all\_output)

    </div>

105. <div class="de2">

    end

    </div>

106. <div class="de1">

     

    </div>

107. <div class="de1">

    Then /\^the output should contain:\$/ do |expected|

    </div>

108. <div class="de1">

      assert\_partial\_output(expected, all\_output)

    </div>

109. <div class="de1">

    end

    </div>

110. <div class="de2">

     

    </div>

111. <div class="de1">

    Then /\^the output should not contain:\$/ do |unexpected|

    </div>

112. <div class="de1">

      assert\_no\_partial\_output(unexpected, all\_output)

    </div>

113. <div class="de1">

    end

    </div>

114. <div class="de1">

     

    </div>

115. <div class="de2">

    \#\# the output should contain exactly "output"

    </div>

116. <div class="de1">

    \#\# the output from \`echo -n "Hello"\` should contain exactly
    "Hello"

    </div>

117. <div class="de1">

    Then /\^the output(?: from "(.\*?)")? should contain exactly
    "(.\*?)"\$/ do |cmd, expected|

    </div>

118. <div class="de1">

      assert\_exact\_output(expected, cmd ? output\_from(cmd) :
    all\_output)

    </div>

119. <div class="de1">

    end

    </div>

120. <div class="de2">

     

    </div>

121. <div class="de1">

    \#\# the output should contain exactly:

    </div>

122. <div class="de1">

    \#\# the output from \`echo -n "Hello"\` should contain exactly:

    </div>

123. <div class="de1">

    Then /\^the output(?: from "(.\*?)")? should contain exactly:\$/ do
    |cmd, expected|

    </div>

124. <div class="de1">

      assert\_exact\_output(expected, cmd ? output\_from(cmd) :
    all\_output)

    </div>

125. <div class="de2">

    end

    </div>

126. <div class="de1">

     

    </div>

127. <div class="de1">

    \# "the output should match" allows regex in the partial\_output, if

    </div>

128. <div class="de1">

    \# you don't need regex, use "the output should contain" instead
    since

    </div>

129. <div class="de1">

    \# that way, you don't have to escape regex characters that

    </div>

130. <div class="de2">

    \# appear naturally in the output

    </div>

131. <div class="de1">

    Then /\^the output should match \\/([\^\\/]\*)\\/\$/ do |expected|

    </div>

132. <div class="de1">

      assert\_matching\_output(expected, all\_output)

    </div>

133. <div class="de1">

    end

    </div>

134. <div class="de1">

     

    </div>

135. <div class="de2">

    Then /\^the output should match:\$/ do |expected|

    </div>

136. <div class="de1">

      assert\_matching\_output(expected, all\_output)

    </div>

137. <div class="de1">

    end

    </div>

138. <div class="de1">

     

    </div>

139. <div class="de1">

    \# The previous two steps antagonists

    </div>

140. <div class="de2">

    Then /\^the output should not match \\/([\^\\/]\*)\\/\$/ do
    |expected|

    </div>

141. <div class="de1">

      assert\_not\_matching\_output(expected, all\_output)

    </div>

142. <div class="de1">

    end

    </div>

143. <div class="de1">

     

    </div>

144. <div class="de1">

    Then /\^the output should not match:\$/ do |expected|

    </div>

145. <div class="de2">

      assert\_not\_matching\_output(expected, all\_output)

    </div>

146. <div class="de1">

    end

    </div>

147. <div class="de1">

     

    </div>

148. <div class="de1">

    Then /\^the exit status should be (\\d+)\$/ do |exit\_status|

    </div>

149. <div class="de1">

      assert\_exit\_status(exit\_status.to\_i)

    </div>

150. <div class="de2">

    end

    </div>

151. <div class="de1">

     

    </div>

152. <div class="de1">

    Then /\^the exit status should not be (\\d+)\$/ do |exit\_status|

    </div>

153. <div class="de1">

      assert\_not\_exit\_status(exit\_status.to\_i)

    </div>

154. <div class="de1">

    end

    </div>

155. <div class="de2">

     

    </div>

156. <div class="de1">

    Then /\^it should (pass|fail) with:\$/ do |pass\_fail,
    partial\_output|

    </div>

157. <div class="de1">

      self.\_\_send\_\_("assert\_\#{pass\_fail}ing\_with",
    partial\_output)

    </div>

158. <div class="de1">

    end

    </div>

159. <div class="de1">

     

    </div>

160. <div class="de2">

    Then /\^it should (pass|fail) with exactly:\$/ do |pass\_fail,
    exact\_output|

    </div>

161. <div class="de1">

      assert\_exit\_status\_and\_output(pass\_fail == "pass",
    exact\_output, true)

    </div>

162. <div class="de1">

    end

    </div>

163. <div class="de1">

     

    </div>

164. <div class="de1">

    Then /\^it should (pass|fail) with regexp?:\$/ do |pass\_fail,
    expected|

    </div>

165. <div class="de2">

      assert\_matching\_output(expected, all\_output)

    </div>

166. <div class="de1">

      assert\_success(pass\_fail == 'pass')

    </div>

167. <div class="de1">

    end

    </div>

168. <div class="de1">

     

    </div>

169. <div class="de1">

    \#\# the stderr should contain "hello"

    </div>

170. <div class="de2">

    \#\# the stderr from "echo -n 'Hello'" should contain "hello"

    </div>

171. <div class="de1">

    \#\# the stderr should contain exactly:

    </div>

172. <div class="de1">

    \#\# the stderr from "echo -n 'Hello'" should contain exactly:

    </div>

173. <div class="de1">

    Then /\^the stderr(?: from "(.\*?)")? should contain( exactly)?
    "(.\*?)"\$/ do |cmd, exact, expected|

    </div>

174. <div class="de1">

      if exact

    </div>

175. <div class="de2">

        assert\_exact\_output(expected, cmd ? stderr\_from(cmd) :
    all\_stderr)

    </div>

176. <div class="de1">

      else

    </div>

177. <div class="de1">

        assert\_partial\_output(expected, cmd ? stderr\_from(cmd) :
    all\_stderr)

    </div>

178. <div class="de1">

      end

    </div>

179. <div class="de1">

    end

    </div>

180. <div class="de2">

     

    </div>

181. <div class="de1">

    \#\# the stderr should contain:

    </div>

182. <div class="de1">

    \#\# the stderr from "echo -n 'Hello'" should contain:

    </div>

183. <div class="de1">

    \#\# the stderr should contain exactly:

    </div>

184. <div class="de1">

    \#\# the stderr from "echo -n 'Hello'" should contain exactly:

    </div>

185. <div class="de2">

    Then /\^the stderr(?: from "(.\*?)")? should contain( exactly)?:\$/
    do |cmd, exact, expected|

    </div>

186. <div class="de1">

      if exact

    </div>

187. <div class="de1">

        assert\_exact\_output(expected, cmd ? stderr\_from(cmd) :
    all\_stderr)

    </div>

188. <div class="de1">

      else

    </div>

189. <div class="de1">

        assert\_partial\_output(expected, cmd ? stderr\_from(cmd) :
    all\_stderr)

    </div>

190. <div class="de2">

      end

    </div>

191. <div class="de1">

    end

    </div>

192. <div class="de1">

     

    </div>

193. <div class="de1">

    \#\# the stdout should contain "hello"

    </div>

194. <div class="de1">

    \#\# the stdout from "echo -n 'Hello'" should contain "hello"

    </div>

195. <div class="de2">

    \#\# the stdout should contain exactly:

    </div>

196. <div class="de1">

    \#\# the stdout from "echo -n 'Hello'" should contain exactly:

    </div>

197. <div class="de1">

    Then /\^the stdout(?: from "(.\*?)")? should contain( exactly)?
    "(.\*?)"\$/ do |cmd, exact, expected|

    </div>

198. <div class="de1">

      if exact

    </div>

199. <div class="de1">

        assert\_exact\_output(expected, cmd ? stdout\_from(cmd) :
    all\_stdout)

    </div>

200. <div class="de2">

      else

    </div>

201. <div class="de1">

        assert\_partial\_output(expected, cmd ? stdout\_from(cmd) :
    all\_stdout)

    </div>

202. <div class="de1">

      end

    </div>

203. <div class="de1">

    end

    </div>

204. <div class="de1">

     

    </div>

205. <div class="de2">

    \#\# the stdout should contain:

    </div>

206. <div class="de1">

    \#\# the stdout from "echo -n 'Hello'" should contain:

    </div>

207. <div class="de1">

    \#\# the stdout should contain exactly:

    </div>

208. <div class="de1">

    \#\# the stdout from "echo -n 'Hello'" should contain exactly:

    </div>

209. <div class="de1">

    Then /\^the stdout(?: from "(.\*?)")? should contain( exactly)?:\$/
    do |cmd, exact, expected|

    </div>

210. <div class="de2">

      if exact

    </div>

211. <div class="de1">

        assert\_exact\_output(expected, cmd ? stdout\_from(cmd) :
    all\_stdout)

    </div>

212. <div class="de1">

      else

    </div>

213. <div class="de1">

        assert\_partial\_output(expected, cmd ? stdout\_from(cmd) :
    all\_stdout)

    </div>

214. <div class="de1">

      end

    </div>

215. <div class="de2">

    end

    </div>

216. <div class="de1">

     

    </div>

217. <div class="de1">

    Then /\^the stderr should not contain "([\^"]\*)"\$/ do |unexpected|

    </div>

218. <div class="de1">

      assert\_no\_partial\_output(unexpected, all\_stderr)

    </div>

219. <div class="de1">

    end

    </div>

220. <div class="de2">

     

    </div>

221. <div class="de1">

    Then /\^the stderr should not contain:\$/ do |unexpected|

    </div>

222. <div class="de1">

      assert\_no\_partial\_output(unexpected, all\_stderr)

    </div>

223. <div class="de1">

    end

    </div>

224. <div class="de1">

     

    </div>

225. <div class="de2">

    Then /\^the (stderr|stdout) should not contain anything\$/ do
    |stream\_name|

    </div>

226. <div class="de1">

      stream = self.send("all\_\#{stream\_name}")

    </div>

227. <div class="de1">

      stream.should be\_empty

    </div>

228. <div class="de1">

    end

    </div>

229. <div class="de1">

     

    </div>

230. <div class="de2">

    Then /\^the stdout should not contain "([\^"]\*)"\$/ do |unexpected|

    </div>

231. <div class="de1">

      assert\_no\_partial\_output(unexpected, all\_stdout)

    </div>

232. <div class="de1">

    end

    </div>

233. <div class="de1">

     

    </div>

234. <div class="de1">

    Then /\^the stdout should not contain:\$/ do |unexpected|

    </div>

235. <div class="de2">

      assert\_no\_partial\_output(unexpected, all\_stdout)

    </div>

236. <div class="de1">

    end

    </div>

237. <div class="de1">

     

    </div>

238. <div class="de1">

    Then /\^the stdout from "([\^"]\*)" should not contain
    "([\^"]\*)"\$/ do |cmd, unexpected|

    </div>

239. <div class="de1">

      assert\_no\_partial\_output(unexpected, stdout\_from(cmd))

    </div>

240. <div class="de2">

    end

    </div>

241. <div class="de1">

     

    </div>

242. <div class="de1">

    Then /\^the stderr from "([\^"]\*)" should not contain
    "([\^"]\*)"\$/ do |cmd, unexpected|

    </div>

243. <div class="de1">

      assert\_no\_partial\_output(unexpected, stderr\_from(cmd))

    </div>

244. <div class="de1">

    end

    </div>

245. <div class="de2">

     

    </div>

246. <div class="de1">

    Then /\^the file "([\^"]\*)" should not exist\$/ do |file\_name|

    </div>

247. <div class="de1">

      check\_file\_presence([file\_name], false)

    </div>

248. <div class="de1">

    end

    </div>

249. <div class="de1">

     

    </div>

250. <div class="de2">

    Then /\^the following files should exist:\$/ do |files|

    </div>

251. <div class="de1">

      check\_file\_presence(files.raw.map{|file\_row| file\_row[0]},
    true)

    </div>

252. <div class="de1">

    end

    </div>

253. <div class="de1">

     

    </div>

254. <div class="de1">

    Then /\^the following files should not exist:\$/ do |files|

    </div>

255. <div class="de2">

      check\_file\_presence(files.raw.map{|file\_row| file\_row[0]},
    false)

    </div>

256. <div class="de1">

    end

    </div>

257. <div class="de1">

     

    </div>

258. <div class="de1">

    Then /\^a file named "([\^"]\*)" should exist\$/ do |file|

    </div>

259. <div class="de1">

      check\_file\_presence([file], true)

    </div>

260. <div class="de2">

    end

    </div>

261. <div class="de1">

     

    </div>

262. <div class="de1">

    Then /\^a file named "([\^"]\*)" should not exist\$/ do |file|

    </div>

263. <div class="de1">

      check\_file\_presence([file], false)

    </div>

264. <div class="de1">

    end

    </div>

265. <div class="de2">

     

    </div>

266. <div class="de1">

    Then /\^a (\\d+) byte file named "([\^"]\*)" should exist\$/ do
    |file\_size, file\_name|

    </div>

267. <div class="de1">

      check\_file\_size([[file\_name, file\_size.to\_i]])

    </div>

268. <div class="de1">

    end

    </div>

269. <div class="de1">

     

    </div>

270. <div class="de2">

    Then /\^the following directories should exist:\$/ do |directories|

    </div>

271. <div class="de1">

      check\_directory\_presence(directories.raw.map{|directory\_row|
    directory\_row[0]}, true)

    </div>

272. <div class="de1">

    end

    </div>

273. <div class="de1">

     

    </div>

274. <div class="de1">

    Then /\^the following directories should not exist:\$/ do
    |directories|

    </div>

275. <div class="de2">

      check\_directory\_presence(directories.raw.map{|directory\_row|
    directory\_row[0]}, false)

    </div>

276. <div class="de1">

    end

    </div>

277. <div class="de1">

     

    </div>

278. <div class="de1">

    Then /\^a directory named "([\^"]\*)" should exist\$/ do |directory|

    </div>

279. <div class="de1">

      check\_directory\_presence([directory], true)

    </div>

280. <div class="de2">

    end

    </div>

281. <div class="de1">

     

    </div>

282. <div class="de1">

    Then /\^a directory named "([\^"]\*)" should not exist\$/ do
    |directory|

    </div>

283. <div class="de1">

      check\_directory\_presence([directory], false)

    </div>

284. <div class="de1">

    end

    </div>

285. <div class="de2">

     

    </div>

286. <div class="de1">

    Then /\^the file "([\^"]\*)" should contain "([\^"]\*)"\$/ do |file,
    partial\_content|

    </div>

287. <div class="de1">

      check\_file\_content(file, partial\_content, true)

    </div>

288. <div class="de1">

    end

    </div>

289. <div class="de1">

     

    </div>

290. <div class="de2">

    Then /\^the file "([\^"]\*)" should not contain "([\^"]\*)"\$/ do
    |file, partial\_content|

    </div>

291. <div class="de1">

      check\_file\_content(file, partial\_content, false)

    </div>

292. <div class="de1">

    end

    </div>

293. <div class="de1">

     

    </div>

294. <div class="de1">

    Then /\^the file "([\^"]\*)" should contain:\$/ do |file,
    partial\_content|

    </div>

295. <div class="de2">

      check\_file\_content(file, partial\_content, true)

    </div>

296. <div class="de1">

    end

    </div>

297. <div class="de1">

     

    </div>

298. <div class="de1">

    Then /\^the file "([\^"]\*)" should contain exactly:\$/ do |file,
    exact\_content|

    </div>

299. <div class="de1">

      check\_exact\_file\_content(file, exact\_content)

    </div>

300. <div class="de2">

    end

    </div>

301. <div class="de1">

     

    </div>

302. <div class="de1">

    Then /\^the file "([\^"]\*)" should match \\/([\^\\/]\*)\\/\$/ do
    |file, partial\_content|

    </div>

303. <div class="de1">

      check\_file\_content(file, /\#{partial\_content}/, true)

    </div>

304. <div class="de1">

    end

    </div>

305. <div class="de2">

     

    </div>

306. <div class="de1">

    Then /\^the file "([\^"]\*)" should not match \\/([\^\\/]\*)\\/\$/
    do |file, partial\_content|

    </div>

307. <div class="de1">

      check\_file\_content(file, /\#{partial\_content}/, false)

    </div>

308. <div class="de1">

    end

    </div>

</div>

</div>

<div class="sourceblocklink">

</div>

</div>

<div class="vspace">

</div>

</div>
