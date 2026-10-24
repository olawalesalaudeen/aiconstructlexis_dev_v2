# Syntactic competence
**Type:** Construct  
**Referenced in:** 22 papers  
**Also known as:** Syntactic awareness, Syntactic understanding, Syntax learning, Syntactic ability, Formal competence, Syntactic generalization, Grammatical knowledge, Grammatical competence, Grammatical awareness, Grammatical abstraction, Grammatical accuracy, Syntactic knowledge  

## State of the Field

**Definition agreement:** Consensus. Most papers define syntactic competence as a model's latent grasp of grammatical structure or rules, including representing syntax internally and using it to process, judge, or produce well-formed sentences independent of meaning. A few definitions emphasize particular manifestations such as acceptability judgments, internal representations, cross-linguistic or L2 cases, or abstract category generalization, but these are differences in emphasis and setting rather than different constructs.

**Space of definitions.** Across the papers, the prevailing usage treats syntactic competence as a latent ability or internalized knowledge of grammatical structure and rules. Most definitions describe representing and processing agreement, word order, sentence hierarchy, and sentence-level form, often with the practical test of distinguishing acceptable from unacceptable, or grammatical from ungrammatical, contrasts; some broaden this to syntax, the syntax-semantics interface, and morphology. Smaller strands define it more specifically as formal competence independent of meaning, grammatical abstraction over category constraints, or grammatical accuracy in L2 English agreement phenomena. Another minority framing places it in the model's internal representations, as the degree to which hidden states encode and use part-of-speech, dependency, and phrase-type information, or infers it from outputs that stay in the correct syntactic category despite semantic errors.

**Space of facets.** Papers often use neighboring labels interchangeably, including syntactic understanding, syntactic ability, syntactic awareness, grammatical knowledge, grammatical competence, grammatical awareness, syntactic knowledge, and grammatical abstraction. The construct is broken into facets such as part-of-speech tags, dependency labels, phrase types, agreement, word order, sentence hierarchy, and complex constructions like passive voice, relative clauses, coordination, and construction-specific formal constraints; one definition also groups it with syntax-semantics interface phenomena and morphology. A recurring contrast is between formal competence and semantic or functional knowledge, with one paper describing a form-meaning asymmetry in which models learn formal constraints but not semantic constraints.

**Space of measurement.** Operationally, papers link the construct to 2 measurement instruments and 3 behavioral indicators. The most frequent instruments are BLiMP and SyntaxGym, used as benchmark test suites for syntactic generalization, and BLiMP is also described as probing grammatical competence and as part of BLiMP-style targeted evaluations. On the behavioral side, papers measure it with grammatical acceptability judgment and subject-verb agreement, using acceptability tasks and linguistic minimal pairs to assess robustness to grammatical errors and the ability to distinguish acceptable from unacceptable sentences. These operationalizations largely match definitions centered on grammatical rules, contrasts, and agreement, while definitions about hidden-state encoding of part-of-speech, dependency, and phrase-type structure are present but not directly linked to a measurement instrument here; the remaining linked behavioral indicator, event extraction, appears in a causal claim rather than as a measure.

**Links.** Beyond measurement, one paper claims a causal relationship from syntactic competence to event extraction, stating that syntax information has been found beneficial for that task. Papers also report related, non-causal links from grammatical acceptability judgment to syntactic competence and from semantic understanding to syntactic competence. The latter relation is expressed as a form-meaning asymmetry, where models learn formal constraints almost perfectly but fail semantic constraints, and no correlational claim is recorded.

## Sources

**[STARE at the Structure: Steering ICL Exemplar Selection with Structural Alignment](https://aclanthology.org/2025.emnlp-main.746.pdf) (as "Syntactic awareness")**
> The degree to which a model's internal representations encode and utilize grammatical structure such as part-of-speech, dependency relations, and phrase types to inform processing decisions.

**[Explainability and Interpretability of Multilingual Large Language Models: A Survey](https://aclanthology.org/2025.emnlp-main.1033.pdf) (as "Syntactic understanding")**
> The latent ability to represent and process grammatical structures such as agreement, word order, and sentence hierarchy across languages.

**[Child-Directed Language Does Not Consistently Boost Syntax Learning in Language Models](https://aclanthology.org/2025.emnlp-main.999.pdf) (as "Syntactic ability")**
> The latent capacity of a language model to acquire and apply grammatical rules, particularly in distinguishing grammatical from ungrammatical sentence structures.

**[UnpackingLet Alone: Human-Scale Models Generalize to a Rare Construction in Form but not Meaning](https://aclanthology.org/2025.emnlp-main.1399.pdf) (as "Formal competence")**
> A model's ability to correctly identify and apply the syntactic and structural rules of a linguistic construction, independent of its meaning.

**[TurBLiMP: A Turkish Benchmark of Linguistic Minimal Pairs](https://aclanthology.org/2025.emnlp-main.834.pdf)**
> The latent ability of a language model to correctly process and judge grammatical structures in accordance with native speaker intuitions.

**[QFrCoLA: a Quebec-French Corpus of Linguistic Acceptability Judgments](https://aclanthology.org/2025.emnlp-main.6.pdf) (as "Grammatical knowledge")**
> The model's internalized representation of a language's formal rules of grammar.

**[Layer-wise Minimal Pair Probing Reveals Contextual Grammatical-Conceptual Hierarchy in Speech Representations](https://aclanthology.org/2025.emnlp-main.1790.pdf) (as "Grammatical competence")**
> The latent capacity to encode and distinguish acceptable versus unacceptable grammatical contrasts across syntax, syntax-semantics interface, and morphology.

**[BIRD: Bronze Inscription Restoration and Dating](https://aclanthology.org/2025.emnlp-main.1073.pdf) (as "Grammatical awareness")**
> The inferred ability of a model to produce outputs that conform to the syntactic rules and categories of a language, even when making semantic errors.

**[BabyLM's First Constructions: Causal interventions provide a signal of learning](https://aclanthology.org/2025.emnlp-main.113.pdf) (as "Grammatical abstraction")**
> The capacity to generalize beyond specific word forms to abstract syntactic and semantic categories, such as recognizing that a construction requires a comparative adjective rather than a particular word.

**[Can LLMs Simulate L2-English Dialogue? An Information-Theoretic Analysis of L1-Dependent Biases](https://aclanthology.org/2025.acl-long.219.pdf) (as "Grammatical accuracy")**
> The latent ability to produce syntactically correct constructions in L2 English, particularly in agreement phenomena such as number, tense, and subject-verb consistency, despite L1 interference.

**[LinguaLens: Towards Interpreting Linguistic Mechanisms of Large Language Models via Sparse Auto-Encoder](https://aclanthology.org/2025.emnlp-main.1433.pdf) (as "Syntactic knowledge")**
> The latent representation of grammatical structure and sentence-level form, including constructions like passive voice, relative clauses, and coordination.

## Relationships

### Syntactic competence →
- **BLiMP** (measurements) — *measured_by*
  > We use the BLiMP (Warstadt et al., 2020) and SyntaxGym (SG, Gauthier et al., 2020) test suites to evaluate LMs for syntactic generalization.
  - [Sneaking Syntax into Transformer Language Models with Tree Regularization](https://aclanthology.org/2025.naacl-long.407.pdf)
- **Event extraction** (behaviors tasks) — *causes*
  > Among EE literature, syntax information has been found beneficial for the task (Nguyen et al., 2016; Yan et al., 2019; Liu et al., 2019a; Lai et al., 2020). (Section 1)
  - [Soft Syntactic Reinforcement for Neural Event Extraction](https://aclanthology.org/2025.naacl-long.479.pdf)
- **SyntaxGym** (measurements) — *measured_by*
  > We use the BLiMP (Warstadt et al., 2020) and SyntaxGym (SG, Gauthier et al., 2020) test suites to evaluate LMs for syntactic generalization.
  - [Sneaking Syntax into Transformer Language Models with Tree Regularization](https://aclanthology.org/2025.naacl-long.407.pdf)
- **Data efficiency** (constructs) — *causes*
  > TREEREG surpasses the baseline’s maximum syntactic generalization performance on SG by 4.4 points when trained on only 50% of the data, demonstrating substantially more sample-efficient syntactic generalization.
  - [Sneaking Syntax into Transformer Language Models with Tree Regularization](https://aclanthology.org/2025.naacl-long.407.pdf)

### Associated with
- **Grammatical acceptability judgment** (behaviors tasks)
  > However, LLMs can exploit grammatical information, given an appropriate task—e.g. grammaticality judgment or IGT prediction—and more useful grammatical data in the form of our typological prompt, which achieves leading results on these linguistic tasks. (Section 6)
  - [Can LLMs Really Learn to Translate a Low-Resource Language from One Grammar Book?](https://proceedings.iclr.cc/paper_files/paper/2025/file/20f44da80080d76bbc35bca0027f14e6-Paper-Conference.pdf)
- **Semantic understanding** (constructs)
  > Our experiments show strong evidence for a form–meaning asymmetry: Human-scale models learn LET-ALONE’s formal constraints almost perfectly (§4), but fail to learn any semantic constraints (§5).
  - [UnpackingLet Alone: Human-Scale Models Generalize to a Rare Construction in Form but not Meaning](https://aclanthology.org/2025.emnlp-main.1399.pdf)
