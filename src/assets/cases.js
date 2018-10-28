const cases = {
	"MIANOWNIK": {
		"rzeczownik": {
			"liczba pojedyncza": {
				"menski": {
					"zwykle": "ø",
					"albo": "a"
				},
				"zenski": {
					"zwykle": "a",
					"albo": "ø, i"
				},
				"nijaki": {
					"zwykle": "o, e, ę",
					"albo": "um"
				}
			},
			"liczba mnoga": {
				"menski": {
					"męskoosobowy": {
						"b, d, f, ch, ł, m, n, р, s, t, w, z": "i",
						"k, g, r": "y",
						"sz, cz, dz, dż, ż, rz, ś, ć, dź, ź, ń, l, j": "e",
						"rodzina, tytuł, narodowość": "owie"
					},
					"niemęskoosobowy": {
						"zwykle": "y",
						"k, g": "i",
						"sz, cz, dz, dż, ż, rz, ś, ć, dź, ź, ń, c, l, j": "e"
					}
				},
				"zenski": {
					"zwykle": "y",
					"k, g": "i",
					"sz, cz, dz, dż, ż, rz, ś, ć, dź, ź, ń, c, l, j": "e"
				},
				"nijaki": {
					"zwykle": "a"
				}
			}
		},
		"przymiotnik": {
			"liczba pojedyncza": {
				"menski": {
				},
				"zenski": {
				},
				"nijaki": {
				}
			},
			"liczba mnoga": {
				"menski": {
					"męskoosobowy": {
						"t > ti, d > dzi, ł > li, sz > si, ch > si, st > ści, оnу > eni, ołi > eli": "i",
						"k > су, g > dzy, r > rzy, c, cz, dz": "y"
					},
					"niemęskoosobowy": {
						"zwykle": "e"
					}
				},
				"zenski": {
					"zwykle": "e"
				},
				"nijaki": {
					"zwykle": "e"
				}
			}
		}
	},
	"DOPEŁNIACZ": {
		"rzeczownik": {
			"liczba pojedyncza": {
				"menski": {
					"żywotne": {
						"zwykle": "a"
					},
					"nieżywotne": {
						"zwykle": "a, u"
					}
				},
				"zenski": {
					"zwykle": "y",
					"k, g": "i"
				},
				"nijaki": {
					"zwykle": "a"
				}
			},
			"liczba mnoga": {
				"menski": {
					"zwykle": "ów",
					"sz, cz, dz, dż, ż, rz + c": "y",
					"ś, ć, ź, dź, ń + l, j": "i"
				},
				"zenski": {
					"zwykle": "ø"
				},
				"nijaki": {
					"zwykle": "ø"
				}
			}
		},
		"przymiotnik": {
			"liczba pojedyncza": {
				"menski": {
					"zwykle": "ego"
				},
				"zenski": {
					"zwykle": "ej"
				},
				"nijaki": {
					"zwykle": "ego"
				}
			},
			"liczba mnoga": {
				"menski": {
					"zwykle": "ych",
					"k,g": "ich"
				},
				"zenski": {
					"zwykle": "ych",
					"k,g": "ich"
				},
				"nijaki": {
					"zwykle": "ych",
					"k,g": "ich"
				}
			}
		}
	},
	"CELOWNIK": {
		"rzeczownik": {
			"liczba pojedyncza": {
				"menski": {
					"zwykle": "owi",
					"zwykle jednosylabowe": "u"
				},
				"zenski": {
					"zwykle": "e, i, y"
				},
				"nijaki": {
					"zwykle": "u"
				}
			},
			"liczba mnoga": {
				"menski": {
					"zwykle": "еmu"
				},
				"zenski": {
					"zwykle": "еj"
				},
				"nijaki": {
					"zwykle": "еmu"
				}
			}
		},
		"przymiotnik": {
			"liczba pojedyncza": {
				"menski": {
					"zwykle": "om"
				},
				"zenski": {
					"zwykle": "om"
				},
				"nijaki": {
					"zwykle": "om"
				}
			},
			"liczba mnoga": {
				"menski": {
					"zwykle": "ym",
					"k,g": "im"
				},
				"zenski": {
					"zwykle": "ym",
					"k,g": "im"
				},
				"nijaki": {
					"zwykle": "ym",
					"k,g": "im"
				}
			}
		}
	},
	"BIERNIK": {
		"rzeczownik": {
			"liczba pojedyncza": {
				"menski": {
					"żywotne": {
						"zwykle": "a"
					},
					"nieżywotne": {
						"zwykle": "ø"
					}
				},
				"zenski": {
					"zwykle": "ę"
				},
				"nijaki": {
					"zwykle": "o, e, ę, um"
				}
			},
			"liczba mnoga": {
				"menski": {
					"męskoosobowy": {
						"zwykle": "ów",
						"sz, cz, dz, dż, ż, rz + c": "y",
						"ś, ć, ź, dź, ń + l, j": "i"
					},
					"niemęskoosobowy": {
						"zwykle": "y",
						"k, g": "i",
						"sz, cz, dz, dż, ż, rz, ś, ć, dź, ź, ń, c, l, j": "e"
					}
				},
				"zenski": {
					"zwykle": "y",
					"k, g": "i",
					"sz, cz, dz, dż, ż, rz, ś, ć, dź, ź, ń, c, l, j": "e"
				},
				"nijaki": {
					"zwykle": "a"
				}
			}
		},
		"przymiotnik": {
			"liczba pojedyncza": {
				"menski": {
					"żywotne": {
						"zwykle": "ego"
					},
					"nieżywotne": {
						"zwykle": "y",
						"k,g": "i"
					}
				},
				"zenski": {
					"zwykle": "ą"
				},
				"nijaki": {
					"zwykle": "e"
				}
			},
			"liczba mnoga": {
				"menski": {
					"męskoosobowy": {
						"zwykle": "ych",
						"k, g": "ich"
					},
					"niemęskoosobowy": {
						"zwykle": "e"
					}
				},
				"zenski": {
					"zwykle": "e"
				},
				"nijaki": {
					"zwykle": "e"
				}
			}
		}
	},
	"NARZĘDNIK": {
		"rzeczownik": {
			"liczba pojedyncza": {
				"menski": {
					"zwykle": "i, em"
				},
				"zenski": {
					"zwykle": "ą"
				},
				"nijaki": {
					"zwykle": "i, em"
				}
			},
			"liczba mnoga": {
				"menski": {
					"zwykle": "ami"
				},
				"zenski": {
					"zwykle": "ami"
				},
				"nijaki": {
					"zwykle": "ami"
				}
			}
		},
		"przymiotnik": {
			"liczba pojedyncza": {
				"menski": {
					"zwykle": "ym",
					"k, g": "im"
				},
				"zenski": {
					"zwykle": "ą"
				},
				"nijaki": {
					"zwykle": "ym",
					"k, g": "im"
				}
			},
			"liczba mnoga": {
				"menski": {
					"zwykle": "ymi",
					" k, g": "imi"
				},
				"zenski": {
					"zwykle": "ymi",
					" k, g": "imi"
				},
				"nijaki": {
					"zwykle": "ymi",
					" k, g": "imi"
				}
			}
		}
	},
	"MIEJSCOWNIK": {
		"rzeczownik": {
			"liczba pojedyncza": {
				"menski": {
					"zwykle": "e, u",
					"b, f, m, n, p, s, w, z, t > c, d > dz": "ie",
					"r > rz, ł > l": "e",
					"k, g, ch, c, dz, sz, rz, ż, cz, l, j, ś, ć, ź, dź, ń": "u"
				},
				"zenski": {
					"zwykle": "e, y, i",
					"k > c, g > dz, ch > sz": "e",
					"c, dz, sz, rz, ż, cz": "y",
					"l, j, ś, ć, ź, dź, ń": "i"
				},
				"nijaki": {
					"zwykle": "e, u",
					"b, f, m, n, p, s, w, z, t > c, d > dz": "ie",
					"r > rz, ł > l": "e",
					"k, g, ch, c, dz, sz, rz, ż, cz, l, j, ś, ć, ź, dź, ń": "u"
				}
			},
			"liczba mnoga": {
				"menski": {
					"zwykle": "ach"
				},
				"zenski": {
					"zwykle": "ach"
				},
				"nijaki": {
					"zwykle": "ach"
				}
			}
		},
		"przymiotnik": {
			"liczba pojedyncza": {
				"menski": {
					"zwykle": "ym",
					"k, g": "im"
				},
				"zenski": {
					"zwykle": "ej"
				},
				"nijaki": {
					"zwykle": "ym",
					"k, g": "im"
				}
			},
			"liczba mnoga": {
				"menski": {
					"zwykle": "ych",
					"k, g": "ich"
				},
				"zenski": {
					"zwykle": "ych",
					"k, g": "ich"
				},
				"nijaki": {
					"zwykle": "ych",
					"k, g": "ich"
				}
			}
		}
	}
}

export default cases;