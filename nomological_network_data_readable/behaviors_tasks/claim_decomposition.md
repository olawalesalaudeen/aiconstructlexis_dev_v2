# Claim decomposition
**Type:** Behavior  
**Referenced in:** 13 papers  
**Also known as:** Claim extraction, Claim simplification, Viewpoint extraction, Statement decomposition, Atomic proposition decomposition  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats claim decomposition as breaking a complex input, claim, statement, summary, or caption into smaller units for separate checking. Most definitions emphasize verifiable sub-claims, discrete claims, or simpler components, and some make atomicity explicit: papers describe "decomposing input text into sub-claims," producing "a list of atomic subclaims," or turning a caption into "minimal true/false claims." A smaller line of work extends the output to sub-questions or semantically independent viewpoints, but the common requirement is that the resulting units be individually evaluable or verifiable.

**Variants.** Papers use several nearby names for the behavior, including claim extraction, claim simplification, statement decomposition, viewpoint extraction, and atomic proposition decomposition. The settings vary from complex claims in fact-checking and fake news detection, to larger documents with decontextualised claim sentences, to summaries whose references are decomposed into atomic factual subclaims, to statements for independent evaluation in hallucination detection, and to detailed image captions broken into atomic units about the image.

**Space of elicitation and scores.** Claim decomposition is measured by 3 instruments: DnD, FActScore, and WiCE. Their recorded uses frame them as a joint decomposition and decontextualization method, an LLM-based fact-checking pipeline that verifies decomposed claims against a trusted reference source, and a decomposition module used in experiments.

**What it is taken as evidence of.** Papers link it to 2 constructs, but they do not present a single shared evidence-of framing. One paper records claim decomposition as related to Calibration through claim-level extraction, per-claim confidence estimation, and analysis at the claim level. Another paper claims a causal relationship from Claim decomposition to Interpretability and explainability, stating that claim-level decomposition enables finer-grained and more interpretable evaluation.

## Sources

**[IMRRF: Integrating Multi-Source Retrieval and Redundancy Filtering for LLM-based Fake News Detection](https://aclanthology.org/2025.naacl-long.461.pdf)**
> Breaking down a complex input text into smaller, verifiable sub-claims, either emphasizing atomicity or verifiability.

**[RAGChecker: A Fine-grained Framework for Diagnosing Retrieval-Augmented Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/27245589131d17368cccdfa990cbf16e-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Claim extraction")**
> Decomposing a text into a set of discrete claims for later verification.

**[The Psychology of Falsehood: A Human-Centric Survey of Misinformation Detection](https://aclanthology.org/2025.emnlp-main.428.pdf) (as "Claim simplification")**
> The task of breaking down complex assertions into simpler, more easily verifiable components.

**[GraphEval: A Lightweight Graph-Based LLM Framework for Idea Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5ce40ee957e4f76ef53c09d0bae20f4-Paper-Conference.pdf) (as "Viewpoint extraction")**
> The task of decomposing a complex research idea into a list of simpler, semantically independent, and evaluable units called viewpoints.

**[A Probabilistic Framework for LLM Hallucination Detection via Belief Tree Propagation](https://aclanthology.org/2025.naacl-long.158.pdf) (as "Statement decomposition")**
> Breaking down a complex statement containing multiple claims into simpler, constituent sub-statements for independent evaluation.

**[Toward Robust Hyper-Detailed Image Captioning: A Multiagent Approach and Dual Evaluation Metrics for Factuality and Coverage](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lee25aj/lee25aj.pdf) (as "Atomic proposition decomposition")**
> Breaking down a detailed caption into minimal true/false claims about the image for individual verification.

## Relationships

### Claim decomposition →
- **Interpretability and explainability** (constructs) — *causes*
  > Other approaches, including RAGAS (Shahul et al., 2023), RAG-Checker (Ru et al., 2024), and OpenEval (Ispas et al., 2025), introduce claim-level decomposition, enabling LLMs to assess the faithfulness and correctness of each factual statement for finer-grained and more interpretable evaluation.
  - [RAG-Zeval: Enhancing RAG Responses Evaluator through End-to-End Reasoning and Ranking-Based Reinforcement Learning](https://aclanthology.org/2025.emnlp-main.1267.pdf)

### Associated with
- **Calibration** (constructs)
  > This approach involves extracting distinct claims from the generated content, estimating the confidence associated with each claim, and then analyzing the calibration at the claim level. (Section 1)
  - [LitCab: Lightweight Language Model Calibration over Short- and Long-form Responses](https://proceedings.iclr.cc/paper_files/paper/2024/file/3815d62554efad0878fad6c1c30ffda0-Paper-Conference.pdf)
- **WiCE** (measurements)
  > “we use the decomposition modules from VeriScore, FactScore, and Wice3 for our experiments”
  - [Decomposition Dilemmas: Does Claim Decomposition Boost or Burden Fact-Checking Performance?](https://aclanthology.org/2025.naacl-long.320.pdf)
- **FActScore** (measurements)
  > “FACTSCORE is an LLM-based fact-checking pipeline that verifies claims decomposed from a passage against a trusted reference source”
  - [DnDScore: Decontextualization and Decomposition for Factuality Verification in Long-Form Text Generation](https://aclanthology.org/2025.emnlp-main.1205.pdf)
