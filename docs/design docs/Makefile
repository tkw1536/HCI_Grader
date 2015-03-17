all: build

build:
	latexmk -pv- -f -pdf main.tex

pdf:
	latexmk  -f -pdf main.tex

spell:
	@aspell --lang=en --mode=tex check main.tex
	@aspell --lang=en --mode=tex check sections/tom.tex
	@aspell --lang=en --mode=tex check sections/roxana.tex
	@aspell --lang=en --mode=tex check sections/nick.tex
	@aspell --lang=en --mode=tex check sections/naomi.tex
	@aspell --lang=en --mode=tex check sections/vlad.tex




clean:
	latexmk -c
	find . -iname "*converted-to.pdf*" -delete
	rm -f pdflatex*.fls
	rm -f -r *.lol
	rm -f -r *.bbl
