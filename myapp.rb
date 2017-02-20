# myapp.rb
ENV['sectret'] = 'd81b87dd2bbad662ff8d75236eb6380c37feae34'

require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end