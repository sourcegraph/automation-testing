package main

import (
	"io"

	"github.com/pkg/errors"
	"gopkg.in/inconshreveable/log15.v2"
)

type Compiler struct {
	jitEnabled bool

	out io.Writer
}

func (c *Compiler) Emit(instructions []byte) error {
	log15.Debug("Emitting instructions", "length", len(instructions), "jitEnabled", c.jitEnabled)

	_, err := c.out.Write(instructions)
	if err != nil {
		return errors.Wrap(err, "emitting instructions")
	}

	return nil
}
