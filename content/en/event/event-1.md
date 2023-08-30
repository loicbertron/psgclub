---
title: PSG - OM
date: 2023-09-01T15:00:00.000-04:00
type: match
homeLogo: /images/teams/13.png
awayLogo: /images/teams/1.png
link: https://www.facebook.com/events/1031116564562056
location: >
  Union Française de Montréal
  429 Avenue Viger E,
  Montréal, QC H2L 2N9

---

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

{{ range $index, $Section := .events }}
{{ if ge 10 $index}}
{{ if ge (time .date).Unix now.Unix }}
