describe 'Escapify'
	describe '.escapifyHTML()'
    	it 'should escape HTML chars in string'
	  		$.escapifyHTML("Alan<Rubin>&ehlegal").should.eql 'Alan&lt;Rubin&gt;&amp;ehlegal'
		end
		it 'should escape undefined/null value in string'
	  		$.escapifyHTML(undefined).should.eql "$$_undefined_escapeHTML()_$$"
	  		$.escapifyHTML(null).should.eql "$$_undefined_escapeHTML()_$$"
		end	
	end

	describe '.unescapifyHTML()'
		it 'should unescape HTML chars in string'
  			$.unescapifyHTML("Alan&lt;Rubin&gt;&amp;ehlegal").should.eql 'Alan<Rubin>&ehlegal'
		end
		it 'should unescape undefined/null value in string'
  			$.unescapifyHTML(undefined).should.eql "$$_undefined_unescapeHTML()_$$"
  			$.unescapifyHTML(null).should.eql "$$_undefined_unescapeHTML()_$$"
		end
	end
end