const cases = {
	"MIANOWNIK": {
		"rzeczownik": {
			"liczba pojedyncza": {
				"męski": {
					"zwykle": "ø",
					"albo": "a"
				},
				"żeński": {
					"zwykle": "a",
					"albo": "ø, i"
				},
				"nijaki": {
					"zwykle": "o, e, ę",
					"albo": "um"
				}
			},
			"liczba mnoga": {
				"męski": {
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
				"żeński": {
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
				"męski": {
				},
				"żeński": {
				},
				"nijaki": {
				}
			},
			"liczba mnoga": {
				"męski": {
					"męskoosobowy": {
						"t > ti, d > dzi, ł > li, sz > si, ch > si, st > ści, оnу > eni, ołi > eli": "i",
						"k > су, g > dzy, r > rzy, c, cz, dz": "y"
					},
					"niemęskoosobowy": {
						"zwykle": "e"
					}
				},
				"żeński": {
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
				"męski": {
					"żywotne": {
						"zwykle": "a"
					},
					"nieżywotne": {
						"zwykle": "a, u"
					}
				},
				"żeński": {
					"zwykle": "y",
					"k, g": "i"
				},
				"nijaki": {
					"zwykle": "a"
				}
			},
			"liczba mnoga": {
				"męski": {
					"zwykle": "ów",
					"sz, cz, dz, dż, ż, rz + c": "y",
					"ś, ć, ź, dź, ń + l, j": "i"
				},
				"żeński": {
					"zwykle": "ø"
				},
				"nijaki": {
					"zwykle": "ø"
				}
			}
		},
		"przymiotnik": {
			"liczba pojedyncza": {
				"męski": {
					"zwykle": "ego"
				},
				"żeński": {
					"zwykle": "ej"
				},
				"nijaki": {
					"zwykle": "ego"
				}
			},
			"liczba mnoga": {
				"męski": {
					"zwykle": "ych",
					"k,g": "ich"
				},
				"żeński": {
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
				"męski": {
					"zwykle (ą > ę, ó > o, e > ø, ci > t, rz > r, dzi > d)": "owi",
					"zwykle jednosylabowe": "u",
					"-a (g > dz, t > cie)": "ie"
				},
				"żeński": {
					"zwykle": "ie",
					"d > dzie, g > dz, r > rz, k > c": "ie",
					"miękkotematowe": "i, y"
				},
				"nijaki": {
					"zwykle": "u"
				}
			},
			"liczba mnoga": {
				"męski": {
					"zwykle": "om"
				},
				"żeński": {
					"zwykle": "om"
				},
				"nijaki": {
					"zwykle": "om"
				}
			}
		},
		"przymiotnik": {
			"liczba pojedyncza": {
				"męski": {
					"zwykle": "emu"
				},
				"żeński": {
					"zwykle": "ej"
				},
				"nijaki": {
					"zwykle": "emu"
				}
			},
			"liczba mnoga": {
				"męski": {
					"zwykle": "ym",
					"k,g": "im"
				},
				"żeński": {
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
				"męski": {
					"żywotne": {
						"zwykle": "a"
					},
					"nieżywotne": {
						"zwykle": "ø"
					}
				},
				"żeński": {
					"zwykle": "ę"
				},
				"nijaki": {
					"zwykle": "o, e, ę, um"
				}
			},
			"liczba mnoga": {
				"męski": {
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
				"żeński": {
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
				"męski": {
					"żywotne": {
						"zwykle": "ego"
					},
					"nieżywotne": {
						"zwykle": "y",
						"k,g": "i"
					}
				},
				"żeński": {
					"zwykle": "ą"
				},
				"nijaki": {
					"zwykle": "e"
				}
			},
			"liczba mnoga": {
				"męski": {
					"męskoosobowy": {
						"zwykle": "ych",
						"k, g": "ich"
					},
					"niemęskoosobowy": {
						"zwykle": "e"
					}
				},
				"żeński": {
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
				"męski": {
					"zwykle": "i, em"
				},
				"żeński": {
					"zwykle": "ą"
				},
				"nijaki": {
					"zwykle": "i, em"
				}
			},
			"liczba mnoga": {
				"męski": {
					"zwykle": "ami"
				},
				"żeński": {
					"zwykle": "ami"
				},
				"nijaki": {
					"zwykle": "ami"
				}
			}
		},
		"przymiotnik": {
			"liczba pojedyncza": {
				"męski": {
					"zwykle": "ym",
					"k, g": "im"
				},
				"żeński": {
					"zwykle": "ą"
				},
				"nijaki": {
					"zwykle": "ym",
					"k, g": "im"
				}
			},
			"liczba mnoga": {
				"męski": {
					"zwykle": "ymi",
					" k, g": "imi"
				},
				"żeński": {
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
				"męski": {
					"zwykle": "e, u",
					"b, f, m, n, p, s, w, z, t > c, d > dz": "ie",
					"r > rz, ł > l": "e",
					"k, g, ch, c, dz, sz, rz, ż, cz, l, j, ś, ć, ź, dź, ń": "u"
				},
				"żeński": {
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
				"męski": {
					"zwykle": "ach"
				},
				"żeński": {
					"zwykle": "ach"
				},
				"nijaki": {
					"zwykle": "ach"
				}
			}
		},
		"przymiotnik": {
			"liczba pojedyncza": {
				"męski": {
					"zwykle": "ym",
					"k, g": "im"
				},
				"żeński": {
					"zwykle": "ej"
				},
				"nijaki": {
					"zwykle": "ym",
					"k, g": "im"
				}
			},
			"liczba mnoga": {
				"męski": {
					"zwykle": "ych",
					"k, g": "ich"
				},
				"żeński": {
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