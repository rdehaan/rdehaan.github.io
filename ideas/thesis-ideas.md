---
title: Thesis topics
parent: Ideas for research projects
has_children: false
nav_order: 2
---

# Thesis topics
{: .no_toc }

The following research ideas might be useful as a starting point for a
bachelor's or a master's thesis&mdash;e.g., for students in the UvA's
[Master of Logic](https://msclogic.illc.uva.nl/),
[Bachelor of AI](https://www.uva.nl/programmas/bachelors/kunstmatige-intelligentie/kunstmatige-intelligentie.html)
or [Master of AI](https://www.uva.nl/en/programmes/masters/artificial-intelligence/artificial-intelligence.html)
programs.

---

#### Contents:
{: .no_toc }

1. TOC
{:toc}

---

## BSc thesis ideas

More coming
{: .label .label-green }

<!--
### 
-->

---

## MSc thesis ideas

More coming
{: .label .label-green }

---

### Finding fragments on which ASP algorithms run efficiently in the worst case

**Description:**
Modern [CDCL](https://en.wikipedia.org/wiki/Conflict-driven_clause_learning)-style
search algorithms work amazingly well in many cases for
[answer set programming (ASP)](https://en.wikipedia.org/wiki/Answer_set_programming).
However, they don't come with worst-case performance guarantees.
It would be interesting to find out whether there are classes of logic programs
for which such algorithms can be proven to work in polynomial time in the worst case.
<br />
**Research questions:**
(1) Are there classes of logic programs for which current ASP algorithms work efficiently also in the worst-case?
(2) Can we identify matching lower case results showing that larger fragments don't yield such guarantees?
<br />
**References:**
- Y. Lierler. *Abstract answer set solvers with backjumping and learning*. Theory and Practice of Logic Programming, 11(2&ndash;3):135&ndash;169, 2011.

---

### Using treewidth for efficient DEL reasoning

**Description:**
Many reasoning problems related to
[dynamic epistemic logic (DEL)](https://en.wikipedia.org/wiki/Dynamic_epistemic_logic)
are computationally intractable&mdash;for example, the model checking problem.
These intractability results hold even in various restricted settings.
One notion of structure in graphs that has often been used to develop efficient algorithms
for restricted settings of a problem is that of
[treewidth](https://en.wikipedia.org/wiki/Treewidth).
It would be interesting to investigate whether the notion of treewidth can be used to
identify restricted settings for DEL reasoning that are computationally tractable.
<br />
**Research questions:**
(1) Can we use treewidth to find efficient algorithms for DEL reasoning in restricted settings?
(2) To what extent are such restricted settings relevant and useful for applications of DEL.
<br />
**References:**
- G. Aucher, and F. Schwarzentruber. *On the complexity of dynamic epistemic logic*. Proceedings of the 14th conference on Theoretical Aspects of Rationality and Knowledge (TARK 2013), 2013.
- M. Cygan, F. Fomin, Ł. Kowalik, D. Lokshtanov, D. Marx, M. Pilipczuk, M. Pilipczuk, and S. Saurabh. *Parameterized algorithms*. Springer, 2015.
- J. van Eijck, and F. Schwarzentruber. *Epistemic probability logic simplified*. Proceedings of Advances in Modal Logic (AiML 2014), 2014.
- R. de Haan, and I. van de Pol. *On the Computational Complexity of Model Checking for Dynamic Epistemic Logic with S5 Models*. Technical report [arXiv:1805.09880](https://arxiv.org/abs/1805.09880), 2018.


---

### Developing a parameterized variant of PAC learning

**Description:**
The framework of [probably approximately correct (PAC) learning](https://en.wikipedia.org/wiki/Probably_approximately_correct_learning) is used in computational learning theory to mathematically analyse machine learning. This framework is based on the traditional notion of efficiency as polynomial-time computability. The area of [parameterized complexity theory](https://en.wikipedia.org/wiki/Parameterized_complexity) has developed a more fine-grained notion of efficiency (*fixed-parameter tractability*) that allows (structural) properties of problem inputs to be taken into account.
It would be interesting to see whether it makes sense to integrate the notion of fixed-parameter tractability in the framework of PAC learning, and whether it provides a useful contribution to the mathematical foundations of machine learning.
<br />
**Research questions:**
(1) What needs to be adapted in the framework of PAC learning if we were to use the notion of fixed-parameter tractability instead of polynomial-time computability, and what consequences would this have for the foundational results in PAC learning?
(2) Are there natural and interesting machine learning problems for which such an adapted framework of PAC learning provides a better analysis?
<br />
**References:**
- R.G. Downey, and M.R. Fellows. *Fundamentals of Parameterized Complexity*. Springer, 2013.
- J. Flum, and M. Grohe. *Parameterized Complexity Theory*. Springer, 2006.
- M.J. Kearns, and U. Vazirani. *An Introduction to Computational Learning Theory*. MIT Press, 1994.

<!--
### Computational complexity of Judgment Aggregation rules for different Boolean circuit classes
### ASP with meta-programming for NP<sup>NP</sup> problems
### Lower bounds for DNNF circuits for voting applications
-->
