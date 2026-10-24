# Paraphrasing
**Type:** Behavior  
**Referenced in:** 39 papers  
**Also known as:** Text rephrasing, Rewriting, Text paraphrasing, Query rephrasing, Profile diversification, Paraphrase generation, Machine paraphrasing, Rephrasing  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats paraphrasing as meaning-preserving rewriting of an existing text, document, or sentence in different words or structure. Most papers describe success as preserving the original, full, or core meaning, sometimes explicitly as semantic equivalence, while changing surface form through lexical or syntactic variation. A smaller line of work narrows the input to queries or user or item profiles, but keeps the same requirement of semantic preservation.

**Variants.** The literature uses several nearby names, most often text rephrasing, rewriting, text paraphrasing, paraphrase generation, machine paraphrasing, and rephrasing. Variants differ mainly by setting: papers study document and sentence paraphrase, query rephrasing, profile diversification into semantically similar but textually distinct versions, and paraphrasing for source-language rewriting, style transfer, video-text augmentation, or iterative multi-turn generation. Some variants add constraints beyond simple rewording, such as preserving class labels, adding context without altering meaning, or producing watermark-conditioned paraphrases.

**Space of elicitation and scores.** No measurement instrument is linked to paraphrasing. Operationally, papers usually elicit it with direct instructions to paraphrase or rephrase without modifying meaning, or by applying a paraphraser to selected text, queries, or watermarked samples; some work also uses datasets with human annotations for semantic equivalence. Among linked behaviors, one benchmark measures instruction following with a paraphrase task, and papers connect paraphrasing to three behavioral indicators overall.

**What it is taken as evidence of.** As a construct indicator, the recorded linkage is only to semantic preservation: one paper treats semantic preservation as measured by paraphrasing, describing paraphrase data as enabling a model to "rewrite the input without changing the semantics." Other relationship claims point to behavioral rather than construct links: one paper reports de-identification is related to paraphrasing, and one paper claims a causal relationship from paraphrasing to watermark removal, defined through watermarked text that no longer retains the watermark after a paraphrasing attack.

## Sources

**[xRAG: Extreme Context Compression for Retrieval-augmented Generation with One Token](https://proceedings.neurips.cc/paper_files/paper/2024/file/c5cf13bfd3762821ef7607e63ee90075-Paper-Conference.pdf)**
> Reproducing the content of a document in different words, used here as a pretraining task to align retrieval features with text.

**[When LLMs Play the Telephone Game: Cultural Attractors as Conceptual Tools to Evaluate LLMs in Multi-turn Settings](https://proceedings.iclr.cc/paper_files/paper/2025/file/dbdea7859f1d2fc10f2c9e79b8f5ae54-Paper-Conference.pdf) (as "Text rephrasing")**
> Producing a paraphrase of an input text while preserving its meaning.

**[LLMs can be easily Confused by Instructional Distractions](https://aclanthology.org/2025.acl-long.957.pdf) (as "Rewriting")**
> The task of rephrasing a given text to alter its structure or wording while preserving its original semantic meaning.

**[Robust Multi-bit Text Watermark with LLM-based Paraphrasers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25k/xu25k.pdf) (as "Text paraphrasing")**
> The observable act of generating a new text that preserves the semantic meaning of an original text but uses different wording or structure.

**[DocReRank: Single-Page Hard Negative Query Generation for Training Multi-Modal RAG Rerankers](https://aclanthology.org/2025.emnlp-main.436.pdf) (as "Query rephrasing")**
> Modifying the phrasing of a query while preserving its original meaning to test for reliance on semantic rather than surface-level cues.

**[EasyRec: Simple yet Effective Language Models for Recommendation](https://aclanthology.org/2025.emnlp-main.894.pdf) (as "Profile diversification")**
> The observable behavior of an LLM rephrasing a given user or item profile to generate multiple semantically similar but textually distinct versions for data augmentation.

**[PlagBench: Exploring the Duality of Large Language Models in Plagiarism Generation and Detection](https://aclanthology.org/2025.naacl-long.384.pdf) (as "Paraphrase generation")**
> The model produces semantically equivalent variations of input sentences, used to expand diagnostic datasets while preserving meaning.

**[On the Reliability of Watermarks for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d78e9e4316e1714fbb0f20be66f8044c-Paper-Conference.pdf) (as "Machine paraphrasing")**
> The observable act of using a language model to rewrite or rephrase a given text, often with the goal of altering its surface form while preserving meaning.

**[LLM as a Broken Telephone: Iterative Generation Distorts Information](https://aclanthology.org/2025.acl-long.371.pdf) (as "Rephrasing")**
> The task of rewriting a given document to use different wording while preserving its original meaning, used as an alternative iterative task.

## Relationships

### Paraphrasing →
- **DIPPER** (measurements) — *measured_by*
  > “we paraphrase various evaluation episodes using DIPPER (Krishna et al., 2023)”
  - [Few-Shot Detection of Machine-Generated Text using Style Representations](https://proceedings.iclr.cc/paper_files/paper/2024/file/7e54a2592e3f51b9bed625a780310424-Paper-Conference.pdf)
- **BERTScore** (measurements) — *measured_by*
  > "Semantic equivalence →BERTScore (Zhang et al., 2019a)"
  - [PlagBench: Exploring the Duality of Large Language Models in Plagiarism Generation and Detection](https://aclanthology.org/2025.naacl-long.384.pdf)
- **AlignScore** (measurements) — *measured_by*
  > "Consistency →AlignScore (Zha et al., 2023)"
  - [PlagBench: Exploring the Duality of Large Language Models in Plagiarism Generation and Detection](https://aclanthology.org/2025.naacl-long.384.pdf)
- **Watermark removal** (behaviors tasks) — *causes*
  > The evasion rate is calculated as the fraction of watermarked text that does not retain the watermark after applying the paraphrasing attack. (Section 6.2)
  - [Optimizing Adaptive Attacks against Watermarks for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/diaa25a/diaa25a.pdf)

### Associated with
- **De-identification** (behaviors tasks)
  > Additionally, we make use of the state-of-the-Art 11B transformer-based paraphrasing model Dipper (Krishna et al., 2024) to baseline the anonymizing effect of pure text paraphrasing. (Sec. 5)
  - [Language Models are Advanced Anonymizers](https://proceedings.iclr.cc/paper_files/paper/2025/file/f478b2e8ad9ff0756bf5b79fb31c330f-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks)
  > Instruction Following: four tasks to paraphrase, simplify, summarize, or generate stories
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Semantic preservation** (constructs)
  > “We pre-train DiffuSeq using the paraphrase dataset, which enables it to rewrite the input without changing the semantics.”
  - [DiffusionAttacker: Diffusion-Driven Prompt Manipulation for LLM Jailbreak](https://aclanthology.org/2025.emnlp-main.1128.pdf)
