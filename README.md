# AmazonClone

This project is to create a small clone of Amazon, using Micro Frontend using @angular-architects module-federation strategy.


the command is written bellow.

ng new amazon-clone --style-scss
ng add @angular-architects/module-federation --project amazon-clone --port 4200 --type host
ng g c header
ng g application fresh --routing --style=scss
ng add @angular-architects/module-federation --project fresh --port 4201 --type remote
ng add @angular-architects/module-federation --project mobiles --port 4202 --type remote