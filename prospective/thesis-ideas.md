---
title: Thesis topics
parent: Prospective projects
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

---

### Using DNNF circuits to compute winners for Kemeny and Slater voting

**Description:**
For the Kemeny and Slater voting rules, it is computationally expensive to determine
the winner of an election.
Using known results involving Boolean circuits in Decomposable Negation Normal Form (DNNF),
we can compute the winner of such elections
in time *O(2<sup>m</sup>)*, where *m* is the number of candidates in the election.
We can do this as follows: (i) construct a DNNF circuit that encodes a linear order constraint
on *m* candidates, (ii) use the approach of algebraic model counting to find weighted maximal
models of this constraint, using appropriate weights to carry out the Kemeny and Slater
voting rules.
It would be interesting to see to what extent such an approach would scale for various
types of election data from the [PrefLib library](http://www.preflib.org/).
A recently developed Python [library](https://github.com/blyxxyz/python-nnf)
for (D)NNF circuits can be used to investigate this.
<br />
**Research questions:**
(1) How well does this algorithmic approach work for determining the outcome
of Kemeny and Slater elections on election data from PrefLib?
(2) Can we modify/adapt this approach to work also for certain cases where *m* is too large?
<br />
**References:**
- R. de Haan, *Expressing Linear Orders Requires Exponential-Size DNNFs*. Technical Report, arXiv:1807.06397, 2018.
[(pdf)](https://arxiv.org/pdf/1807.06397.pdf)
- R. de Haan, *Hunting for Tractable Languages for Judgment Aggregation*. In: Proceedings of the 16th International Conference on Principles of Knowledge Representation and Reasoning (KR 2018).
[(pdf)](https://aaai.org/ocs/index.php/KR/KR18/paper/viewFile/18064/17143)
- W.S. Zwicker, *Introduction to Theory of Voting*.
In: F. Brandt, V. Conitzer, U. Endriss, J. Lang, and A.D. Procaccia, editors, Handbook of Computational Social Choice, Cambridge University Press, 2016.
[(pdf)](http://www.cambridge.org/download_file/951600)

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

---

### Studying representation languages for set utility functions

**Description:**
In the area of [computational social choice](http://research.illc.uva.nl/COMSOC/what-is-comsoc.html), it is often useful and relevant to use utility functions <i>u : 2<sup>A</sup> &rarr;</i> &#8469; over a finite set <i>A</i> of items&mdash;for example, when studying [fair division of indivisible goods](https://en.wikipedia.org/wiki/Fair_item_allocation). Often, the assumption is made that an agent assigns some utility to each single item, and that the utility of a set of items is the sum of these individual utilities. Such utility functions are called [additive](https://en.wikipedia.org/wiki/Utility_functions_on_indivisible_goods#Additivity), and are simple to represent (by writing down a utility for each individual item). However, there are many natural examples where utility functions are not additive&mdash;think of the utility of a pair of socks, compared to the utility of a single sock, for example. One can think of various ways of expressing set utility functions. This project involves studying different representation languages for set utility functions and their computational properties.
<br />
**Research questions:**
(1) What representation languages make sense to represent set utility functions? Which of these languages can express natural examples of set utility functions?
(2) How do these different representation languages compare to each other in terms of expressivity and compactness?
(3) What is the computational complexity of computing various operations (e.g., adding two set utility functions) and queries (e.g., computing the utility for a given set, finding a set with maximum utility) for the different representation languages?
<br />
**References:**
- A. Darwiche, and P. Marquis. *A knowledge compilation map*. Journal of Artificial Intelligence Research 17, 2002.
- S. Bouveret, Y. Chevaleyre, and N. Maudet. *Fair Allocation of Indivisible Goods*.
In: F. Brandt, V. Conitzer, U. Endriss, J. Lang, and A.D. Procaccia, editors, Handbook of Computational Social Choice, Cambridge University Press, 2016.
[(pdf)](http://www.cambridge.org/download_file/951600)

<!--
### Computational complexity of Judgment Aggregation rules for different Boolean circuit classes
### ASP with meta-programming for NP<sup>NP</sup> problems
### Lower bounds for DNNF circuits for voting applications
-->
