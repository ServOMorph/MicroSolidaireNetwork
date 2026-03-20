# ROADMAP MicroSolidaireNetwork
# Statuts: 0=todo 1=doing 2=done 3=block | Prio: H/M/L

---
meta:
  stat: dev
  prog: 5
  phase: 1
  maj: YYYY-MM-DD
  goal: "[Objectif principal du projet]"
  success: ["Critere 1", "Critere 2"]
---

## PHASES

### P1:Fondations [1]
env_cfg[2] struct[2] charte_ui[2] roadmap[2] tests_base[0]

### P2:Core [0]
composant_main[0] service_1[0] service_2[0] api[0] tests_unit[0]

### P3:Features [0]
feature_a[0] feature_b[0] feature_c[0]

### P4:Polish [0]
perf[0] e2e[0] docs[0] a11y[0] secu[0]

### P5:Deploy [0]
ci_cd[0] staging[0] prod[0] monitoring[0]

## SESSIONS
# Format: S[DATE]|O:[obj]|F:[fait]|B:[bloque>solution]|N:[next]
S[YYYY-MM-DD]|O:init_projet|F:env_cfg,struct,charte_ui|B:none|N:composant_main

## LOG
# Format: TYPE|ID|DATE|PRIO|DESC|ETAT
# Types: DEC(decision) Q(question) BUG(bug) DEP(dependance)
DEC|001|YYYY-MM-DD|-|Architecture modulaire choisie|-
DEP|charte_graphique|1.0|-|10 themes + 6 modes|-

## DELTA
# Historique incremental (append-only) - Format: [DATE] ACTION CIBLE DETAIL
# Actions: +add -del ~mod !fix ?question
[YYYY-MM-DD] +add P1 init projet via @creation-appli
