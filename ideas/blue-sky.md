---
title: Blue sky and ambitious ideas
parent: Ideas for research projects
has_children: false
nav_order: 3
---

# Blue sky and ambitious research ideas
{: .no_toc }

The following research ideas might be useful as a starting point for a dissertation,
or to initiate larger-scale research programs.

<!-- More coming
{: .label .label-green } -->

---

#### Contents:
{: .no_toc }

1. TOC
{:toc}

---

### Interactive explanations in (combinatorial) voting

**Description:**
For some voting rules, it is easy to give a straightforward and understandable explanation of
the election outcome. For example, for the [Borda rule](https://en.wikipedia.org/wiki/Borda_count),
you can give a list of the candidates and the Borda score that they got in the election.
For other voting rules, such an explanation of the election outcome is harder to give.
For voting rules for which it is computationally intractable to compute the winner&mdash;for example,
for the [Kemeny rule](https://en.wikipedia.org/wiki/Kemeny%E2%80%93Young_method)&mdash;explanations
are bound to grow exponentially in size as elections get larger, in the worst case.
Even for cases where explanations are not of unmanageable size, it is not clear how we can give
an explanation that is intelligible for people&mdash;something which would be helpful to
establish trust among voters that the voting system works as it should.

One possible solution for this problem is to provide interactive explanation systems
to justify the outcome of an election. In such a system, voters can then ask a variety of
questions about the election outcome, and about possible other situations that could have been
the outcome of the election. This could include questions like:
- "Why is situation *X* not the outcome of the election? What would have to have been different
for situation *X* to have been the outcome?"
- "What would have to have been different for the outcome to have property *P*?"
- "How robust is the outcome? What would have to have been different for the outcome of the
election to have changed?"

Answering questions that are useful for interactive explanations of voting outcomes&mdash;like
the ones above&mdash;is
typically a computationally more demanding task than computing the outcome of an election.
To develop interactive explanations for voting outcomes one needs to investigate
how the election scenario should be represented.
Ideally, one would like a representation of the election scenario
(a) that can be computed efficiently from the votes that were cast,
(b) that is therefore reasonably succinct, and
(c) that allows questions like the ones above to be answered efficiently.
Likely, the above desiderata are not mutually compatible in all cases,
and tradeoffs between the different desiderata need to be found.

Useful tools to study the possibility of such interactive explanations include
[computational complexity theory](https://en.wikipedia.org/wiki/Computational_complexity),
[knowledge compilation](https://en.wikipedia.org/wiki/Knowledge_compilation) and compilability.

Interactive explanations for voting outcomes could be used alongside and in addition to
(normative) justifications of why the used voting rule is the right rule to use.

Interactive explanations are useful in standard single-winner elections,
as well as in committee elections (multi-winner elections)
and other more complex (combinatorial) elections.

**Keywords:**
Computational social choice,
computational complexity,
knowledge representation,
knowledge compilation.

**References:**
- S. Arora, and B. Barak. *Computational complexity: A Modern Approach*. Cambridge University Press, 2009.
- F. Brandt, V. Conitzer, U. Endriss, J. Lang, and A.D. Procaccia, editors, *Handbook of Computational Social Choice*, Cambridge University Press, 2016.
[(pdf)](http://www.cambridge.org/download_file/951600)
- M. Cadoli, F.M. Donini, P. Liberatore, and M. Schaerf. *Preprocessing of Intractable Problems*. Information and Computation, 176(2):89&ndash;120, 2002.
[(pdf)](http://www.sciencedirect.com/science/article/pii/S0890540101930433)
- A. Darwiche, and P. Marquis. *A knowledge compilation map*. Journal of Artificial Intelligence Research, 17:229&ndash;264, 2002.
[(pdf)](https://www.jair.org/index.php/jair/article/download/10311/24622)

---

### Developing notions of instance complexity for cognitive science applications

Very challenging!
{: .label .label-yellow }

**Description:**
In the area of [computational cognitive science](https://en.wikipedia.org/wiki/Computational_cognition),
computational complexity arguments have been used to call for refinements of cognitive theories.
The central line of such an argument is typically that a proposed cognitive theory (unintendedly) poses
that humans' cognitive capacities amount to solving computationally intractable problems.
For such a cognitive theory to be a good explanation of human cognition, it must additionally
explain how humans perform these cognitive abilities within a limited amount of time.
Providing such an additional explanation in general would amount to solving long-standing open problems
in computer science (e.g., showing that [P = NP](https://en.wikipedia.org/wiki/P_versus_NP_problem)).
Therefore, this calls for a refinement of the cognitive theory&mdash;e.g., making it more restrictive,
explaining how the environment provides restrictions, etc&mdash;for which we can explain
how it matches human performance within a limited amount of time.

These arguments are based on computational complexity notions that involve various idealizations&mdash;e.g.,
they are based on asymptotic growth, they are based on the worst case (and thus on many problem inputs), etc.
To strengthen the arguments in computational cognitive science, it would be interesting to see
if other notions of complexity can be used for these arguments&mdash;and
if needed, develop new notions of complexity for this purpose.
An interesting possibility for this is to study notions of
[instance complexity](https://complexityzoo.uwaterloo.ca/Complexity_Zoo:I#iclogpoly)&mdash;which
can be based on concepts from
[Kolmogorov complexity](https://en.wikipedia.org/wiki/Kolmogorov_complexity).

**Keywords:**
Computational complexity,
Kolmogorov complexity,
computational cognitive science.

**References:**
- S. Arora, and B. Barak. *Computational complexity: A Modern Approach*. Cambridge University Press, 2009.
- M. Li, and P. Vitányi. *An introduction to Kolmogorov complexity and its applications*. Springer, 2008.
- P. Orponen, K.-I. Ko, U. Schöning, and O. Watanabe. *Instance complexity*, Journal of the ACM 41:96&ndash;121, 1994.
[(pdf)](https://dl.acm.org/citation.cfm?id=174648)
- I. van Rooij. *The Tractable Cognition Thesis*. Cognitive Science 32:939&ndash;984, 2008.
[(pdf)](https://onlinelibrary.wiley.com/doi/pdf/10.1080/03640210801897856)
- I. van Rooij, M. Blokpoel, J. Kwisthout, and T. Wareham. *Intractability and Cognition: A guide to classical and parameterized complexity analysis*. Cambridge University Press, 2019.

---

### Using automated reasoning tools to search for intensional representations of voting rules

**Description:**
Automated theorem proving methods have been used in the area of computational social choice to establish (im)possibility results. For example, SAT solving methods have been used to establish that there is no voting rule that satisfies certain normative axioms on limited-size examples. This has been used together with hand-proven inductive statements to show that there exists no voting rule that satisfies these axioms, for any number of candidates and voters. In cases where there does exist a voting rule satisfying a certain combination of normative axioms, such automated reasoning methods output a description of such a rule&mdash;for all profiles based on the limited number of candidates and voters. However, such descriptions are very human-unfriendly&mdash;distilling a human-understandable description of the working of the voting rule from the output of these automated reasoning tools would be an extremely tedious task. Moreover, there would not even be a guarantee that there is a simple higher-level description of the output of the automated reasoning tools.

It would be interesting to use automated reasoning methods to search for intensional descriptions of voting rules that satisfy certain combinations of normative axioms for all profiles based on a limited number of candidates and voters. In cases where there does exist a conceptually simple voting rule satisfying these properties, this approach has the potential of directly outputting a human-understandable description of the rule.

One way of implementing this approach would be to use an automated reasoning language in which one can express a nondeterministic guess for the description of the voting rule, and a subsequent universal quantification to express that the guessed voting rule must satisfy the required normative axioms on all profiles of limited size. [Answer set programming](https://en.wikipedia.org/wiki/Answer_set_programming) is an example of a language in which one can express such quantification and for which efficient reasoners are available off-the-shelf (e.g., [clingo](https://potassco.org/clingo/)).

A proof of concept for this approach is [this answer set program](http://rdehaan.github.io/files/scoring-pareto-swf.lp)&mdash;that is designed to be used with [clingo](https://potassco.org/clingo/) and with [meta-programming encodings](https://potassco.org/labs/metasp/) for clingo. This answer set program uses the approach described above to find social welfare functions that are based on positional scoring rules (based on a limited number of different scores) that satisfy the axiom of Pareto optimality, for a limited number of candidates and voters. In other words, the intensional representation for these voting rules is a scoring vector. It would be interesting to see if this approach also works well for other intensional representations that can express larger families of voting rules.

**Keywords:**
Computational social choice,
automated reasoning,
answer set programming.

**References:**
- F. Brandt, V. Conitzer, U. Endriss, J. Lang, and A.D. Procaccia, editors, *Handbook of Computational Social Choice*, Cambridge University Press, 2016.
[(pdf)](http://www.cambridge.org/download_file/951600)
- M. Gebser, R. Kaminski, B. Kaufmann, and T. Schaub. *Answer Set Solving in Practice*, Morgan & Claypool Publishers, 2012.
- C. Geist, and D. Peters. *Computer-Aided Methods for Social Choice Theory*. In: U. Endriss, editor, Trends in Computational Social Choice, AI Access, 2017. [(pdf)](http://research.illc.uva.nl/COST-IC1205/BookDocs/TrendsCOMSOC.pdf)
