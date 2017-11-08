@important
Feature: BMWClubBy

  Scenario: Visit forum page
    Given I am on Home page
    Then I click Main button
    And Page title should be "BMW Club Belarus e.V. / Белорусский Клуб БМВ | Белорусский Клуб БМВ. Клубная жизнь, активный отдых, техническая информация, новости."
    And I click Forum button
    And Page title should be "BMW Club Belarus • Белорусский Клуб БМВ"

  Scenario Outline: Checking partners pages
    Given I am on Partners page
    Then I click partner '<partner>'
    And Page title should be '<pageTitle>'
    Examples:
    |partner        |pageTitle|
    |bmwClubService |BMW Club Service - Партнёры Клуба BMW - Форум Белорусского Клуба БМВ / BMW Club Belarus forum|
    |bayerncraft    |Страница 404 - Байернкрафт - официальный дилер BMW|
    |alexPremiumAuto|Автосервис АлексПремиумАвто (Минск)|
    |lavto          |СТО LAVTO -  ремонт автомобилей. Обслуживание и диагностика иномарок - Главная|

  Scenario Outline: Sign in with invalid creds
    Given I am on Forum page
    Then I click sign in button
    And Enter username '<user>'
    And Enter password '<password>'
    And I click submit button
    Then Page title should be "Войти - Форум Белорусского Клуба БМВ / BMW Club Belarus forum"
    And Page contains error message "Логин или пароль неверны."
    Examples:
    |user     |password|
    |wrong     |wrong   |
    |Maksim    |123456  |
    |Liubinski |654321  |

  Scenario: Sign in by valid user
    Given I am on Forum page
    Then I click sign in button
    And Enter username "---"
    And Enter password "---"
    And I click submit button
    Then Page title should be "BMW Club Belarus • Белорусский Клуб БМВ"