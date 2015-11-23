[[#excerpt]]
The person who originally created Ruby desired a language that was a joy to use. Ruby certainly fits the bill. There are some lovely aspects to using the language.
[[#excerptend]]

!!Links
* http://www.ruby-lang.org/en/ - The main ruby site. Defines the language. Obtain ruby here.
* http://www.ruby-doc.org/ - The ruby documentation site.
* http://rubyforge.org/ - Home for ruby projects
* http://www.rubyonrails.org/ - Ruby on Rails site. Web development that doesn't hurt.
* [[DZone Snippets for Ruby -> http://snippets.dzone.com/tag/ruby]]

!!Cookbook
* [[http://snippets.dzone.com/posts/show/4041 | convert between characters and integers and back]]
* [[http://rubyforge.org/snippet/detail.php?type=snippet&id=5 | get all lines from a file, remove newlines, cat them together, emit]] 
-->I especially liked the one-liner: 

(:source lang=ruby:)
catted = ARGF.readlines.map{|l| l.chomp}.join
(:sourceend:)

--> ''[-(Note: [[ARGF doc -> http://www.ruby-doc.org/core-1.9.3/ARGF.html]] - ARGF is a stream designed for use in scripts that process files given as command-line arguments or passed in via STDIN.)-]''

* [[Technology.AnExerciseInRefactoringToOneLineInRuby|+]] &mdash; {Technology.AnExerciseInRefactoringToOneLineInRuby$:Summary}

!!News about Ruby
* DisappearanceOfWhy


>>comment<<
This goes at the bottom of the page, hidden by comment block class
Summary:The most beautiful language for writing programs
Parent:(Technology.)Languages
IncludeMe:[[Technology.Languages]]
Categories:[[!Collections]], [[!Links]]
Tags: ruby, languages, programming, software
(:tags-hide ruby, languages, programming, software:)
>><<
