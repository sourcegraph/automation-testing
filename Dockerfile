FROM golang:latest AS builder-image

WORKDIR /src
COPY . .

RUN go build -o /out/example .

FROM scratch AS bin
COPY --from=builder-image /out/example /
