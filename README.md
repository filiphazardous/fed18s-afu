# Arbetsmetodik för utvecklare VT19

[Kursplan](Kursplan.md)

## Innehåll

* [Delmoment](#delmoment)
* [Uppgifter](#uppgifter)
* [Litteratur](#litteratur)
* [Användbara länkar](#anv%C3%A4ndbara-l%C3%A4nkar)
* [Lektionsplanering](#lektionsplanering)

## Delmoment

| Delmoment                              | Period  |
|:---------------------------------------|--------:|
| [__1. Versionshantering med Git__](#1-versionshantering-med-git) | v.12-15 |
| [__2. Utvecklingsprinciper__](#2-utvecklingsprinciper) | v.17-19 |
| [__3. Kvalitetssäkring av utvecklingsarbete__](#3-kvalitetss%C3%A4kring-av-utvecklingsarbete) | prel v.19-21 |
| [__4. Verktyg och praxis__](#4-verktyg-och-praxis) | prel v.22-24 |

### Uppgifter

| Uppgift                                    | Deadline |
|:-------------------------------------------|---------:|
| Inlämningsuppgift (inlagt i Zenit) 1 (Git)| tis 16/4 |
| Inlämningsuppgift (inlagt i Zenit) 2 (Utvecklingsprinciper)| ons 15/5 |
| Inlämningsuppgift (inlagt i Zenit) 3 (Kodkvalitet)| ons 5/6 |
| Inlämningsuppgift (inlagt i Zenit) 4 (Verktyg och praxis)| ons 19/6 |



| Gruppuppgiften                             | Demodags |
|:-------------------------------------------|---------:|
| Del 1: Node backend                        | 24 maj   |
| Del 2: Front-end med tester                | 7 juni   |
| Del 3: CSS och verifiering av input        | 18 juni  |

## Litteratur

* [Pro Git (PG)](https://git-scm.com/book/en/v2)
* [Clean Code Javascript](https://github.com/ryanmcdermott/clean-code-javascript)
* [CSS Tricks: Working towards better naming](https://css-tricks.com/working-towards-better-naming/)

## Användbara länkar

* [gitkatas](https://github.com/praqma-training/git-katas)
* [TryGit](https://try.github.io/levels/1/challenges/1)
* [Learn Git Branching](https://learngitbranching.js.org/)
* [Några bash-kommandon](Bash.md)
* [Några Javascript-koncept](Javascript.md)

## Lektionsplanering

Länkarna under varje pass ligger till grund för materialet som gås igenom under passet. Läs igenom dessa som förberedelse inför passet för att få ut så mycket som möjligt av det.

<details>
  <summary>Tidigare delmoment</summary>
  <p>

### 1. Versionshantering med Git

#### `v.12, 22/3`

* Grunderna
* [PG: Getting Started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
* [PG: Git Basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

#### `v.13, 29/3`

* Branchning
* [PG: Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)  
* [Gitflow](Gitflow.md)
* [Gitflow-kata](Gitflow-kata.md)

#### `v.14, 5/4`

* Distribuerade arbetssätt
* GitHub
* [PG: Distributed Git](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows)
* [PG: GitHub](https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration)
* [Remote host-övningar](afu3/README.md)

#### `v.15, 12/4`

* Verktyg
  * References, Commit ranges
  * git stash, clean
  * git merge --squash
  * Searching
  * git hooks
* gitk
* SourceTree
* [PG: Tools](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection)
  * Ni behöver inte läsa
    * Signing your work
    * Rerere
    * Submodules
    * Bundling
    * Replace
    * Credential Storage
* [PG: Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
* [Övningar verktyg](afu4/README.md)

### 2. Utvecklingsprinciper

#### `v.17, 26/4`

* Vad är kvalitet
* Teknisk skuld
* Ren kod ("clean code")
  * Namngivning
  * Funktioner
* Don't Repeat Yourself ([DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself))
* Läsbarhet
* [Clean Code](https://github.com/ryanmcdermott/clean-code-javascript)  
  Läs "Introduction", "Variables", och "Functions"
* [CSS Tricks: Working towards better naming](https://css-tricks.com/working-towards-better-naming/)
* [Övningar](afu5/README.md)

#### `v.19, 8/5`

* Refaktorisering
* Ren kod
  * Command-query separation ([CQS](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation))
  * Kommentarer
  * Objekt och klasser
* Scoutregeln (lämna lägerplatsen bättre än den var när du kom)
* You Aren't Gonna Need It ([YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)) och [Feature creep](https://en.wikipedia.org/wiki/Feature_creep)
* SOLID
* [Clean Code](https://github.com/ryanmcdermott/clean-code-javascript)  
  Läs "Objects and Data Structures", "Classes", "SOLID" och "Comments"
* [Övningar](afu6/README.md)


### 3. Kvalitetssäkring av utvecklingsarbete

#### `v.19, 10/5`

* Kodstandard
  * [Idiomatic.js](https://github.com/rwaldron/idiomatic.js)
* Kodgranskning
  * [Code Review Guidelines](https://www.codeproject.com/Articles/524235/Codeplusreviewplusguidelines)
  * [What a CSS Code Review Might Look Like](https://css-tricks.com/what-a-css-code-review-might-look-like/)
* Linting
* Gruppuppgiften, intro och eget arbete
  * [Några Javascript-koncept](Javascript.md) kan vara till hjälp
  * https://github.com/fed18s/gruppuppgiften

#### `v.20, 17/5`

* Testautomatisering
* Enhetstester
  * [What are unit testing, integration testing and functional testing?](https://codeutopia.net/blog/2015/04/11/what-are-unit-testing-integration-testing-and-functional-testing/)
  (Läs avsnittet "Unit Testing")
* TDD
  * [What's the difference between Unit Testing, TDD and BDD](https://codeutopia.net/blog/2015/03/01/unit-testing-tdd-and-bdd/)
* Arbete med gruppuppgiften

#### `v.21, 24/5`

* Integrationstester
* UI-tester
* E2E-tester
* [The practical test pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)
    * Integration tests
    * Contract tests
    * UI tests
    * End-to-End tests
    * Exploratory testing
* Demo gruppuppgiften

  </p>
</details>


### 4. Verktyg och praxis

#### `v.22, 31/5`

* BEM/SMACSS/andra namnkonventioner i CSS
* Graceful degradation / Progressive enhancement
* Content Security Policy och CORS
* Arbete med gruppuppgiften

#### `v.23, 7/6`

* Regex
* Progressive Web Apps
* Demo gruppuppgiften

#### `v.24, 14/6`

* Continuous Integration
* Continuous Delivery
* Arbete med gruppuppgiften

#### `v.25, 18/6`

* Tid för komplettering
* Demo gruppuppgiften

## Gruppuppgiften

### Del två

* Ni förväntas ha implementerat test av alla tre typer (enhetstest,
 integrationstest och funktionstest)
* Funktionstestet ska vara implementerat med Selenium i ert frontend-repo
 (se exemplen som redan finns)
* Er frontend ska kompletteras med en möjlighet att välja mellan katter, hundar
 och pokémon
* Enhetstester och integrationstester får göras i ert frontend- eller
 backend-repo (välj själv)
* Om gruppen som gör en frontend som arbetar mot er backend anmäler buggar
 via Githubs issues så ska ni supporta dem
* Alla i gruppen ska ha medverkat i minst en commit mellan 24 maj och 7 juni
