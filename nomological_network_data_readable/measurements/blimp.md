# BLiMP
**Type:** Measurement  
**Referenced in:** 22 papers  

## State of the Field

**What it is.** Across papers, BLiMP is most commonly described as an English benchmark, corpus, dataset, or test suite of linguistic minimal pairs for grammaticality or acceptability judgments. The prevailing setup is pairs of minimally different acceptable and unacceptable sentences, used to test whether a model identifies the grammatical sentence or assigns lower perplexity to it. Most descriptions refer to 67 paradigms or subtasks with 1,000 pairs each, spanning syntax, morphology, and semantics, though some describe 12 grouped categories or phenomena, one paper states 13 phenomena, and some emphasize template-generated or manually crafted materials totaling 67,000 pairs; one study further restricts BLiMP to 11 datasets usable for generation.

**What it is claimed to measure.** Papers use BLiMP to measure six constructs, and no behavioral indicators are linked to it. The most frequent uses are to measure syntactic competence, language proficiency, explanation faithfulness, formal linguistic competence, and linguistic knowledge, with one additional construct also linked. Across relationships, the claims are spread across several construct labels rather than a single exclusive label.

**Space of uses.** Papers often place BLiMP alongside other evaluation suites. Recurring companions include SyntaxGym and GLUE, with a few papers also using it beside CLiMP, Brain-Score, or Ewok. Authors usually position it as a standard or comprehensive English targeted evaluation, though some narrow it to specific portions, such as syntactic agreement, or to the 11 datasets usable for text generation, and one paper evaluates it in a zero-shot setting.

## Sources

**[Sudden Drops in the Loss: Syntax Acquisition, Phase Transitions, and Simplicity Bias in MLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/3e8df255a03b383f30abe09203770213-Paper-Conference.pdf)**
> Benchmark of Linguistic Minimal Pairs, a corpus of minimal-pair sentence judgments used here to evaluate syntactic phenomena such as agreement.

## Relationships

### → BLiMP
- **Syntactic competence** (constructs) — *measured_by*
  > We use the BLiMP (Warstadt et al., 2020) and SyntaxGym (SG, Gauthier et al., 2020) test suites to evaluate LMs for syntactic generalization.
  - [Sneaking Syntax into Transformer Language Models with Tree Regularization](https://aclanthology.org/2025.naacl-long.407.pdf)
- **Formal linguistic competence** (constructs) — *measured_by*
  > To assess formal linguistic competence, we use two benchmarks: BLIMP (Warstadt et al., 2019) and SYNTAXGYM (Gauthier et al., 2020). (Section 3.3)
  - [From Language to Cognition: How LLMs Outgrow the Human Language Network](https://aclanthology.org/2025.emnlp-main.1237.pdf)
- **Language proficiency** (constructs) — *measured_by*
  > BLiMP provides a fine-grained evaluation of core linguistic competence. (Section 2)
  - [SLlama: Parameter-Efficient Language Model Architecture for Enhanced Linguistic Competence Under Strict Data Constraints](https://aclanthology.org/2025.emnlp-main.1198.pdf)
- **Linguistic knowledge** (constructs) — *measured_by*
  > we evaluate TopoLM’s performance on linguistic knowledge (BLiMP), downstream task (GLUE), and brain alignment benchmarks (Brain-Score)
  - [TopoLM: brain-like spatio-functional organization in a topographic language model](https://proceedings.iclr.cc/paper_files/paper/2025/file/4f7f521c08b5e0cd9931e74fa353b59b-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > "All models were evaluated on a common evaluation measure: BLiMP (Warstadt et al., 2020)."
  - [TopoNets: High performing vision and language models with brain-like topography](https://proceedings.iclr.cc/paper_files/paper/2025/file/6191ab7080c840f67eaf5dff7d5edfcb-Paper-Conference.pdf)
- **Plausibility** (constructs) — *measured_by*
  > ...to examine its plausibility, i.e., the extent to which its attributions align with human-understood linguistic rationales provided by BLiMP... (Section 5)
  - [NormXLogit: The Head-on-Top Never Lies](https://aclanthology.org/2025.emnlp-main.1769.pdf)
