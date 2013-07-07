/*
 * Serve JSON to our AngularJS client
 */

exports.users = function (req, res) {
  res.json(

{
    "meta": {
        "limit": null,
        "offset": null,
        "count": 18
    },
    "data": [
        {
            "loginname": "chris@aa.de.fake",
            "id": "AKtdmhQjQN2F816gvK0QPQ",
            "firstName": "Chris",
            "lastName": "the CEO",
            "role": "CEO",
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/chris.jpg",
            "reports": [
                {
                    "loginname": "aa@aa.de",
                    "id": "07*1llIBRwavJJJpkHVtEw",
                    "firstName": "aa",
                    "lastName": "",
                    "role": "Head of HR",
                    "isActive": true,
                    "isAdmin": true,
                    "isHR": true,
                    "logo": "/images/characters/avatar-purple-with-glasses.png",
                    "viewersPermissions": {
                        "canDelete": null,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                },
                {
                    "loginname": "marcia@aa.de.fake",
                    "id": "DAUe0GFKQMuESI*8RLphPQ",
                    "firstName": "Marcia",
                    "lastName": "the Manager",
                    "role": "CFO",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/marcia.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                },
                {
                    "loginname": "mark@aa.de.fake",
                    "id": "8X1DTEsXQqe1XmuNgQOHig",
                    "firstName": "Mark",
                    "lastName": "the Manager",
                    "role": "Development Manager",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/toby.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                },
                {
                    "loginname": "mary@aa.de.fake",
                    "id": "nLUTVAccSM68-eoMPHFt*A",
                    "firstName": "Mary",
                    "lastName": "the Manager",
                    "role": "Sales Manager",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/mary.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                }
            ],
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "dan@aa.de.fake",
            "id": "szA2qM-RRNeMhyCReP1BcA",
            "firstName": "Dan",
            "lastName": "the Developer",
            "role": "Junior Developer",
            "managerDTO": {
                "loginname": "mary@aa.de.fake",
                "id": "nLUTVAccSM68-eoMPHFt*A",
                "firstName": "Mary",
                "lastName": "the Manager",
                "role": "Sales Manager",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/mary.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/dan.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "daphne@aa.de.fake",
            "id": "aCQH7XUsQ0OuU2vXQ4RBbw",
            "firstName": "Daphne",
            "lastName": "the Developer",
            "role": "Senior Developer",
            "managerDTO": {
                "loginname": "mark@aa.de.fake",
                "id": "8X1DTEsXQqe1XmuNgQOHig",
                "firstName": "Mark",
                "lastName": "the Manager",
                "role": "Development Manager",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/toby.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/daphne.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "dave@aa.de.fake",
            "id": "kQnin3QYTjSKctTMr849TQ",
            "firstName": "Dave",
            "lastName": "the Developer",
            "role": "Senior Developer",
            "managerDTO": {
                "loginname": "mark@aa.de.fake",
                "id": "8X1DTEsXQqe1XmuNgQOHig",
                "firstName": "Mark",
                "lastName": "the Manager",
                "role": "Development Manager",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/toby.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/dave.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "derek@aa.de.fake",
            "id": "w85fCp7MTBmFjZShWcd3dA",
            "firstName": "Derek",
            "lastName": "the Developer",
            "role": "Senior Developer",
            "managerDTO": {
                "loginname": "mark@aa.de.fake",
                "id": "8X1DTEsXQqe1XmuNgQOHig",
                "firstName": "Mark",
                "lastName": "the Manager",
                "role": "Development Manager",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/toby.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/derek.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "fiona@aa.de.fake",
            "id": "I-hpzdRNRxuW9nsI4uWA6w",
            "firstName": "Fiona",
            "lastName": "from Finance",
            "role": "Finance assistent",
            "managerDTO": {
                "loginname": "marcia@aa.de.fake",
                "id": "DAUe0GFKQMuESI*8RLphPQ",
                "firstName": "Marcia",
                "lastName": "the Manager",
                "role": "CFO",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/marcia.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/fiona.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "francesco@aa.de.fake",
            "id": "YXQv7Z8KQWW5TXFXtlsJBA",
            "firstName": "Francesco",
            "lastName": "from Finance",
            "role": "Senior controller",
            "managerDTO": {
                "loginname": "marcia@aa.de.fake",
                "id": "DAUe0GFKQMuESI*8RLphPQ",
                "firstName": "Marcia",
                "lastName": "the Manager",
                "role": "CFO",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/marcia.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/francesco.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "fritz@aa.de.fake",
            "id": "tLUQWPHlQqa3Kkd64SZ*AQ",
            "firstName": "Fritz",
            "lastName": "from Finance",
            "role": "Controller",
            "managerDTO": {
                "loginname": "marcia@aa.de.fake",
                "id": "DAUe0GFKQMuESI*8RLphPQ",
                "firstName": "Marcia",
                "lastName": "the Manager",
                "role": "CFO",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/marcia.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/fritz.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "heather@aa.de.fake",
            "id": "2VSlryZHRWO58u80Q-UPpw",
            "firstName": "Heather",
            "lastName": " from HR",
            "role": "HR Assistant",
            "managerDTO": {
                "loginname": "aa@aa.de",
                "id": "07*1llIBRwavJJJpkHVtEw",
                "firstName": "aa",
                "lastName": "",
                "role": "Head of HR",
                "isActive": true,
                "isAdmin": true,
                "isHR": true,
                "logo": "/images/characters/avatar-purple-with-glasses.png",
                "viewersPermissions": {
                    "canDelete": null,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/heather.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "iggy@aa.de.fake",
            "id": "F*1UZ*-3TBS13Zw39YC9sA",
            "firstName": "Igor",
            "lastName": "the Intern",
            "role": "Sales Summer Intern",
            "managerDTO": {
                "loginname": "mary@aa.de.fake",
                "id": "nLUTVAccSM68-eoMPHFt*A",
                "firstName": "Mary",
                "lastName": "the Manager",
                "role": "Sales Manager",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/mary.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/wasu.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "irene@aa.de.fake",
            "id": "zgUm*dwYSiCxyWaxstiiuQ",
            "firstName": "Irene",
            "lastName": "the Intern",
            "role": "HR summer intern",
            "managerDTO": {
                "loginname": "aa@aa.de",
                "id": "07*1llIBRwavJJJpkHVtEw",
                "firstName": "aa",
                "lastName": "",
                "role": "Head of HR",
                "isActive": true,
                "isAdmin": true,
                "isHR": true,
                "logo": "/images/characters/avatar-purple-with-glasses.png",
                "viewersPermissions": {
                    "canDelete": null,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/reb3.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "marcia@aa.de.fake",
            "id": "DAUe0GFKQMuESI*8RLphPQ",
            "firstName": "Marcia",
            "lastName": "the Manager",
            "role": "CFO",
            "managerDTO": {
                "loginname": "chris@aa.de.fake",
                "id": "AKtdmhQjQN2F816gvK0QPQ",
                "firstName": "Chris",
                "lastName": "the CEO",
                "role": "CEO",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/chris.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/marcia.jpg",
            "reports": [
                {
                    "loginname": "fiona@aa.de.fake",
                    "id": "I-hpzdRNRxuW9nsI4uWA6w",
                    "firstName": "Fiona",
                    "lastName": "from Finance",
                    "role": "Finance assistent",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/fiona.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                },
                {
                    "loginname": "francesco@aa.de.fake",
                    "id": "YXQv7Z8KQWW5TXFXtlsJBA",
                    "firstName": "Francesco",
                    "lastName": "from Finance",
                    "role": "Senior controller",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/francesco.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                },
                {
                    "loginname": "fritz@aa.de.fake",
                    "id": "tLUQWPHlQqa3Kkd64SZ*AQ",
                    "firstName": "Fritz",
                    "lastName": "from Finance",
                    "role": "Controller",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/fritz.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                }
            ],
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "mark@aa.de.fake",
            "id": "8X1DTEsXQqe1XmuNgQOHig",
            "firstName": "Mark",
            "lastName": "the Manager",
            "role": "Development Manager",
            "managerDTO": {
                "loginname": "chris@aa.de.fake",
                "id": "AKtdmhQjQN2F816gvK0QPQ",
                "firstName": "Chris",
                "lastName": "the CEO",
                "role": "CEO",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/chris.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/toby.jpg",
            "reports": [
                {
                    "loginname": "dan@aa.de.fake",
                    "id": "szA2qM-RRNeMhyCReP1BcA",
                    "firstName": "Dan",
                    "lastName": "the Developer",
                    "role": "Junior Developer",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/dan.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                },
                {
                    "loginname": "daphne@aa.de.fake",
                    "id": "aCQH7XUsQ0OuU2vXQ4RBbw",
                    "firstName": "Daphne",
                    "lastName": "the Developer",
                    "role": "Senior Developer",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/daphne.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                },
                {
                    "loginname": "dave@aa.de.fake",
                    "id": "kQnin3QYTjSKctTMr849TQ",
                    "firstName": "Dave",
                    "lastName": "the Developer",
                    "role": "Senior Developer",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/dave.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                },
                {
                    "loginname": "derek@aa.de.fake",
                    "id": "w85fCp7MTBmFjZShWcd3dA",
                    "firstName": "Derek",
                    "lastName": "the Developer",
                    "role": "Senior Developer",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/derek.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                }
            ],
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "mary@aa.de.fake",
            "id": "nLUTVAccSM68-eoMPHFt*A",
            "firstName": "Mary",
            "lastName": "the Manager",
            "role": "Sales Manager",
            "managerDTO": {
                "loginname": "chris@aa.de.fake",
                "id": "AKtdmhQjQN2F816gvK0QPQ",
                "firstName": "Chris",
                "lastName": "the CEO",
                "role": "CEO",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/chris.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/mary.jpg",
            "reports": [
                {
                    "loginname": "iggy@aa.de.fake",
                    "id": "F*1UZ*-3TBS13Zw39YC9sA",
                    "firstName": "Igor",
                    "lastName": "the Intern",
                    "role": "Sales Summer Intern",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/wasu.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                },
                {
                    "loginname": "sam@aa.de.fake",
                    "id": "2KYXveK*TruR4ZRavN8jgQ",
                    "firstName": "Sam",
                    "lastName": "from Sales",
                    "role": "Sales Specialist",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/sam.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                },
                {
                    "loginname": "sarah@aa.de.fake",
                    "id": "-mlxn*N7SnSiGpWDocMDHw",
                    "firstName": "Sarah",
                    "lastName": "from Sales",
                    "role": "Sales Specialist",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/tanja.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                },
                {
                    "loginname": "stan@aa.de.fake",
                    "id": "36-fQ3CLRGyXakk62uPopA",
                    "firstName": "Stan",
                    "lastName": "from Sales",
                    "role": "Sales Specialist",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/soren.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                }
            ],
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "sam@aa.de.fake",
            "id": "2KYXveK*TruR4ZRavN8jgQ",
            "firstName": "Sam",
            "lastName": "from Sales",
            "role": "Sales Specialist",
            "managerDTO": {
                "loginname": "mary@aa.de.fake",
                "id": "nLUTVAccSM68-eoMPHFt*A",
                "firstName": "Mary",
                "lastName": "the Manager",
                "role": "Sales Manager",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/mary.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/sam.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "sarah@aa.de.fake",
            "id": "-mlxn*N7SnSiGpWDocMDHw",
            "firstName": "Sarah",
            "lastName": "from Sales",
            "role": "Sales Specialist",
            "managerDTO": {
                "loginname": "mary@aa.de.fake",
                "id": "nLUTVAccSM68-eoMPHFt*A",
                "firstName": "Mary",
                "lastName": "the Manager",
                "role": "Sales Manager",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/mary.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/tanja.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "stan@aa.de.fake",
            "id": "36-fQ3CLRGyXakk62uPopA",
            "firstName": "Stan",
            "lastName": "from Sales",
            "role": "Sales Specialist",
            "managerDTO": {
                "loginname": "mary@aa.de.fake",
                "id": "nLUTVAccSM68-eoMPHFt*A",
                "firstName": "Mary",
                "lastName": "the Manager",
                "role": "Sales Manager",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/mary.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": false,
            "isHR": false,
            "logo": "/images/characters/soren.jpg",
            "viewersPermissions": {
                "canDelete": true,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        },
        {
            "loginname": "aa@aa.de",
            "id": "07*1llIBRwavJJJpkHVtEw",
            "firstName": "aa",
            "lastName": "",
            "role": "Head of HR",
            "managerDTO": {
                "loginname": "chris@aa.de.fake",
                "id": "AKtdmhQjQN2F816gvK0QPQ",
                "firstName": "Chris",
                "lastName": "the CEO",
                "role": "CEO",
                "isActive": true,
                "isAdmin": false,
                "isHR": false,
                "logo": "/images/characters/chris.jpg",
                "viewersPermissions": {
                    "canDelete": true,
                    "canToggleAdminOrHR": true,
                    "canChange": true,
                    "canAssignBoss": true
                }
            },
            "isActive": true,
            "isAdmin": true,
            "isHR": true,
            "logo": "/images/characters/avatar-purple-with-glasses.png",
            "reports": [
                {
                    "loginname": "heather@aa.de.fake",
                    "id": "2VSlryZHRWO58u80Q-UPpw",
                    "firstName": "Heather",
                    "lastName": " from HR",
                    "role": "HR Assistant",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/heather.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                },
                {
                    "loginname": "irene@aa.de.fake",
                    "id": "zgUm*dwYSiCxyWaxstiiuQ",
                    "firstName": "Irene",
                    "lastName": "the Intern",
                    "role": "HR summer intern",
                    "isActive": true,
                    "isAdmin": false,
                    "isHR": false,
                    "logo": "/images/characters/reb3.jpg",
                    "viewersPermissions": {
                        "canDelete": true,
                        "canToggleAdminOrHR": true,
                        "canChange": true,
                        "canAssignBoss": true
                    }
                }
            ],
            "viewersPermissions": {
                "canDelete": null,
                "canToggleAdminOrHR": true,
                "canChange": true,
                "canAssignBoss": true
            }
        }
    ]
}
    );
};