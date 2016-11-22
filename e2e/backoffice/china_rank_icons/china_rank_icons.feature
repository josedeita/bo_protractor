Feature: CHINA BACKOFFICE - Change rank icons
    As a Distributor in China I want to see the Chinese Rank Icons
    so that I have no legal issues with the local government.

Scenario Outline: UI - A distributor inside/outside China sees the Chinese/Global Rank Icons
    Given that a distributor is logged into the backoffice from <location> China
    When he navigates to <report>
    Then he sees the <rank_icons> Rank icons

    Examples:
    | location | report                                        | rank_icons |
    |  inside  | Rank Status                                   | Chinese    |
    |  outside | Rank Status                                   | Global     |
    |  inside  | Rank Status Widget                            | Chinese    |
    |  outside | Rank Status Widget                            | Global     |
    |  inside  | Fast Start Bonus Widget                       | Chinese    |
    |  outside | Fast Start Bonus Widget                       | Global     |
    |  inside  | Rank Status                                   | Chinese    |
    |  outside | Rank Status                                   | Global     |
    |  inside  | Fast Start                                    | Chinese    |
    |  outside | Fast Start                                    | Global     |
    |  inside  | Fast Track                                    | Chinese    |
    |  outside | Fast Track                                    | Global     |
    |  inside  | Dream Car Program                             | Chinese    |
    |  outside | Dream Car Program                             | Global     |
    |  inside  | Trip Tracker                                  | Chinese    |
    |  outside | Trip Tracker                                  | Global     |
    |  inside  | Rank Bonus                                    | Chinese    |
    |  outside | Rank Bonus                                    | Global     |
    |  inside  | Downline Tree                                 | Chinese    |
    |  outside | Downline Tree                                 | Global     |
    |  inside  | Downline Path                                 | Chinese    |
    |  outside | Downline Path                                 | Global     |
    |  inside  | Downline by Location                          | Chinese    |
    |  outside | Downline by Location                          | Global     |
    |  inside  | Genealogy View                                | Chinese    |
    |  outside | Genealogy View                                | Global     |
    |  inside  | Leader Boards - Top Distributor Enroller      | Chinese    |
    |  outside | Leader Boards - Top Distributor Enroller      | Global     |
    |  inside  | Leader Boards - Top Customer Enroller         | Chinese    |
    |  outside | Leader Boards - Top Customer Enroller         | Global     |
    |  inside  | Leader Boards - Top Team Builder              | Chinese    |
    |  outside | Leader Boards - Top Team Builder              | Global     |
    |  inside  | Leader Boards - Top Business Retention Leader | Chinese    |
    |  outside | Leader Boards - Top Business Retention Leader | Global     |
    |  inside  | Rank Advancement                              | Chinese    |
    |  outside | Rank Advancement                              | Global     |
    |  inside  | Mentoring Program                             | Chinese    |
    |  outside | Mentoring Program                             | Global     |
    |  inside  | Annual Recognition                            | Chinese    |
    |  outside | Annual Recognition                            | Global     |
    |  inside  | Profile - Distributor Information             | Chinese    |
    |  outside | Profile - Distributor Information             | Global     |
