---
title: Complexity of judgment aggregation
parent: Ongoing projects
has_children: false
nav_order: 1
---

# Computational complexity and other computational aspects of judgment aggregation
{: .no_toc }

Under construction
{: .label .label-red }

---

#### Contents:
{: .no_toc }

1. TOC
{:toc}

---

## Collaborators

For this research project, I collaborated with the following people:
- [Ulle Endriss](https://staff.science.uva.nl/u.endriss/)
- [Umberto Grandi](https://www.irit.fr/~Umberto.Grandi/)
- [J&eacute;r&ocirc;me Lang](https://www.lamsade.dauphine.fr/~lang/)
- [Marija Slavkovik](http://slavkovik.com/)

## Background: judgment aggregation

Judgment aggregation is a mathematical framework to model
voting scenarios on multiple yes/no issues, where not every combination
of yes/no votes is allowed.
The allowed combinations of votes are typically represented using
a propositional logic formula, whose satisfying assignments are the
votes/outcomes that are allowed.
Various voting rules (or judgment aggregation rules) that can be used in
such scenarios shave been studied in the literature.
For more details on judgment aggregation,
consult the literature (e.g., [Endriss, 2016]).

## Research findings

We investigated various computational problems that come up in the setting
of judgment aggregation, their computational complexity, and some algorithmic
approaches that can be used to solve these problems.

### Computational complexity of outcome determination

The computational problem of outcome determination is
typically defined as follows&mdash;there are various
variants of this definition [Endriss, De Haan, Lang, Slavkovik, 2019].

| Outcome Determination for judgment aggregation rule *F*: |
|:--|
| *Input:* (1) A judgment aggregation scenario consisting of a set of issues and a sequence of (allowed) votes, (2) a (logic) constraint specifying which outcomes are allowed, and (3) a partial outcome. |
| *Question:* Does the voting rule *F* in this scenario (with the given constraint on the outcomes) yield at least one outcome that agrees with the given partial outcome? |

For most judgment aggregation rules studied in the literature,
this problem is computationally intractable in general.

| JA rule | Computational complexity | References |
|:--|:--|:--|
| Kemeny | P<sup>NP</sup>[log]-complete | [Endriss, Grandi, Porello, 2012] |
| Slater | P<sup>NP</sup>[log]-complete | [Lang, Slavkovik, 2014] |
| Young | P<sup>NP</sup>[log]-complete | [Lang, Slavkovik, 2014] |
| Dodgson | P<sup>NP</sup>[log]-complete | [Lang, Slavkovik, 2014], [Endriss, De Haan, Lang, Slavkovik, 2019] |
| Condorcet | NP<sup>NP</sup>-complete | [Lang, Slavkovik, 2014] |
| MaxHamming | P<sup>NP</sup>[log]-complete | [De Haan, Slavkovik, 2017] |
| AvgGeo | P<sup>NP^NP</sup>[log]-complete | [De Haan, Slavkovik, 2017] |
| MaxGeo | P<sup>NP^NP</sup>[log]-complete | [Endriss, De Haan, Lang, Slavkovik, 2019] |
| Reversal scoring | P<sup>NP</sup>[log]-complete | [De Haan, Slavkovik, 2017] |
| Ranked agenda | P<sup>NP</sup>-complete / NP<sup>NP</sup>-complete | [Endriss, De Haan, 2015] |
| Leximax | P<sup>NP</sup>-complete | [Endriss, De Haan, Lang, Slavkovik, 2019] |

<!--Todo: mention Horn/Krom results
{: .label .label-red }-->

<!--Todo: mention DNNF results
{: .label .label-red }-->

<!--Todo: mention parameterized complexity results
{: .label .label-red }-->

### Computational complexity of strategic behavior

Under construction
{: .label .label-red }

### Encoding into Answer Set Programming

Under construction
{: .label .label-red }

## Open questions

Under construction
{: .label .label-red }

## Publications

- **[Endriss, De Haan, Lang, Slavkovik, 2019]**
U. Endriss, R. de Haan, J. Lang, and M. Slavkovik, *The Complexity Landscape of Outcome Determination in Judgment Aggregation*. *(Unpublished manuscript)*

- **[De Haan, Slavkovik, 2019]**
R. de Haan, and M. Slavkovik, *Answer Set Programming for Judgment Aggregation*. In: Proceedings of the 28th International Joint Conference on Artificial Intelligence (IJCAI 2019). *(To appear)*

- **[De Haan, 2018]**
R. de Haan, *Expressing Linear Orders Requires Exponential-Size DNNFs*. Technical Report, arXiv:1807.06397, 2018.
[(pdf)](https://arxiv.org/pdf/1807.06397.pdf)

- **[De Haan, 2018]**
R. de Haan, *Hunting for Tractable Languages for Judgment Aggregation*. In: Proceedings of the 16th International Conference on Principles of Knowledge Representation and Reasoning (KR 2018).
[(pdf)](https://aaai.org/ocs/index.php/KR/KR18/paper/viewFile/18064/17143)

- **[De Haan, Slavkovik, 2017]**
R. de Haan, and M. Slavkovik, *Complexity Results for Aggregating Judgments using Scoring or Distance-Based Procedures*. In: Proceedings of the 16th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2017).
[(pdf)](http://www.aamas2017.org/aamas2017/proceedings/pdfs/p952.pdf)

- **[De Haan, 2017]**
R. de Haan, *Complexity Results for Manipulation, Bribery and Control of the Kemeny Judgment Aggregation Procedure*. In: Proceedings of the 16th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2017).
[(pdf)](http://www.aamas2017.org/aamas2017/proceedings/pdfs/p1151.pdf)

- **[De Haan, 2016]**
R. de Haan, *Parameterized Complexity Results for the Kemeny Rule in Judgment Aggregation*. In: Proceedings of the 22nd European Conference on Artificial Intelligence (ECAI 2016).
[(pdf)](http://ebooks.iospress.com/volumearticle/44908)

- **[Endriss, Grandi, De Haan, Lang, 2016]**
U. Endriss, U. Grandi, R. de Haan, and J. Lang, *Succinctness of Languages for Judgment Aggregation*. In: Proceedings the 15th International Conference on Principles of Knowledge Representation and Reasoning (KR 2016).
[(pdf)](https://www.aaai.org/ocs/index.php/KR/KR16/paper/view/12851/12474)

- **[Endriss, De Haan, 2015]**
U. Endriss, and R. de Haan, Complexity of the Winner Determination Problem in Judgment Aggregation: Kemeny, Slater, Tideman, Young. In: Proceedings of the 14th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2015).
[(pdf)](http://www.ifaamas.org/Proceedings/aamas2015/aamas/p117.pdf)

- **[Endriss, De Haan, Szeider, 2015]**
U. Endriss, R. de Haan, and S. Szeider, *Parameterized Complexity Results for Agenda Safety in Judgment Aggregation*. In: Proceedings of the 14th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2015).
[(pdf)](http://www.ifaamas.org/Proceedings/aamas2015/aamas/p127.pdf)

## Other references

- **[Endriss, 2016]**
U. Endriss, *Judgment Aggregation*. In: F. Brandt, V. Conitzer, U. Endriss, J. Lang, and A.D. Procaccia, editors, *Handbook of Computational Social Choice*, Cambridge University Press, 2016.
[(pdf)](https://staff.fnwi.uva.nl/u.endriss/pubs/files/EndrissHBCOMSOC2016.pdf)

- **[Lang, Slavkovik, 2014]**
J. Lang, and M. Slavkovik, *How Hard is it to Compute Majority-Preserving Judgment Aggregation Rules?* In: Proceedings of the 21st European Conference on Artificial Intelligence (ECAI 2014).
[(pdf)](http://slavkovik.com/ECAI-371.pdf)

- **[Endriss, Grandi, Porello, 2012]**
U. Endriss, U. Grandi, and D. Porello, *Complexity of judgment aggregation*. Journal of Artificial Intelligence Research (2012).
[(pdf)](https://www.jair.org/index.php/jair/article/download/10788/25757)
