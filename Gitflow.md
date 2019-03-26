# Gitflow

Gitflow är ett vanligt arbetsflöde i Git. Poängen med ett arbetsflöde är att alla utvecklare i ett team utifrån namnet på en gren ska kunna förstå vilken typ av innehåll som finns i grenen.

När man använder Gitflow så behöver man också komma överens om namngivningsstandard för grenar och versioner. För versioner används vanligen någon variant av [semantic versioning](https://semver.org/), för namn på grenar bör grenens syfte framgå (men ett team kan göra andra val, t ex använda bugg-id från en bug-tracker som namn på grenar)

## Typer av grenar
* `master` innehåller den version av produkten som är driftsatt
* `develop` innehåller den accepterade utvecklingsversionen
* `release/<version>` innehåller en version av produkten som är på väg att driftsättas (kan vara under testning)
* `hotfix/<version eller buggnamn>` innehåller en version med buggfix som inte kan vänta på en ordinarie release
* `feature/<namn på feature>` innehåller en version av produkten på vilken vi håller på att utveckla en ny feature


## Flödet i Gitflow
1. Grenen `develop` skapas från `master` (i tidernas begynnelse)
1. En `feature`-gren skapas från `develop` för utveckling
1. När `feature`-grenen är klar och har testats mergas den tillbaks i `develop` (ofta efter att en `rebase` mot `develop` har gjorts)
1. En `release`-gren skapas från `develop` för att förbereda för release
1. När driftsättningen är klar mergas `release`-grenen till master och till `develop` (det har förmodligen tillkommit buggfixar på releasen). I det här läget görs ofta en release-tag på `master`
1. Om en akut bugg har uppstått på `master` så skapas en `hotfix`-gren från `master`
1. När buggfixen är färdig, testat och driftsatt mergas `hotfix`-grenen till `master` och till `develop`. Även i det här läget görs ofta en release-tag på `master`

[Mer om Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
