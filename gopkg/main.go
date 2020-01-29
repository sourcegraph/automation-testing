package main

import (
	"fmt"
	"regexp"
)

func main() {
	r := regexp.MustCompile(`^([\w-_\/\.]+=[\w-_\/\.]+(,[\w-_\/\.]+=[\w-_\/\.]+)*:)?[^,:=]+$`)
	if !r.Match([]byte("foobar")) {
		fmt.Println("no match")
	} else {
		fmt.Println("match")
	}
}
