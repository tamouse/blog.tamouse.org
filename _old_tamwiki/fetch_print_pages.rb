#!/usr/bin/env ruby

require "uri"
require "net/http"

files = File.read(ARGV.first).split(/\n/)
URL_TEMPLATE="http://wiki.tamouse.org/?n=%{file}&action=print"
SAVE_TEMPLATE="print/%{file}.html"

files.each do |file|
  puts file
  url = URI.parse( URL_TEMPLATE % {file: file} )
  page = Net::HTTP.get(url)
  File.write( SAVE_TEMPLATE % {file: file}, page)
end
