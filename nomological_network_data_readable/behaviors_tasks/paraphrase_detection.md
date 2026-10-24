# Paraphrase detection
**Type:** Behavior  
**Referenced in:** 42 papers  
**Also known as:** Duplication detection, Semantic equivalence detection, Paraphrase identification, Semantic equivalence judgment, Duplicate question detection  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is deciding whether a pair of sentences or texts have the same meaning, usually described as paraphrase detection or paraphrase identification. Most definitions phrase success as judging whether two sentences are paraphrases, semantically equivalent, or have the same meaning, and some make the binary criterion explicit as yes or no, or equivalent or not equivalent. A smaller line of work narrows the task to duplicate question detection, and one paper defines it over questions or documents as identifying whether they are semantically equivalent or duplicates. Minority formulations differ in how success is established: one paper reformulates the task as generating a sentence that supports or contradicts a given sentence, another uses mutual entailment between two responses as the criterion for semantic equivalence, and another describes a three-way semantic (in)equivalence task.

**Variants.** Papers use several names for the task, with paraphrase detection and paraphrase identification as the prevalent labels, and smaller lines of work using duplication detection, duplicate question detection, semantic equivalence detection, and semantic equivalence judgment. The behavior is studied on sentence pairs, text snippets, question pairs, and, in one definition, documents; some papers also specify Filipino sentences, German sentences, or the Spanish portion of PAWS-X. Another variant studies semantic equivalence under controlled lexical constraints as a three-way semantic (in)equivalence task, while the mutual-entailment formulation applies the judgment to pairs of responses rather than sentence or question pairs.

**Space of elicitation and scores.** Papers link it to 6 measurement instruments. The most common reports are that it is measured by MRPC, PAWS, and QQP, with MRPC described as focusing on paraphrase detection in text and QQP framed as deciding whether two questions are equivalent or not equivalent; papers also say it is measured by GLUE and PAWS-X, and one line of work uses a human evaluation protocol. Most of these instruments are datasets or benchmarks for paraphrase or semantic equivalence classification, though one paper uses human judgments.

**What it is taken as evidence of.** Papers do not link this behavior to any construct, so no recurring claim appears about what it is evidence of.

## Sources

**[Adapting Large Language Models via Reading Comprehension](https://proceedings.iclr.cc/paper_files/paper/2024/file/d51cd79a85833b022841f7a2383b32d3-Paper-Conference.pdf)**
> The observable task of determining whether two sentences are paraphrases of each other.

**[World Model on Million-Length Video And Language With Blockwise RingAttention](https://proceedings.iclr.cc/paper_files/paper/2025/file/71859ac75d53879d9bbd2f4b77b59929-Paper-Conference.pdf) (as "Duplication detection")**
> The task of identifying whether two questions or documents are semantically equivalent or duplicates.

**[Release the Powers of Prompt Tuning: Cross-Modality Prompt Transfer](https://proceedings.iclr.cc/paper_files/paper/2025/file/7ae9589ff1a691d09ef0528e4e309b2f-Paper-Conference.pdf) (as "Paraphrase identification")**
> The observable task of determining whether two sentences have the same meaning.

**[SUGARCREPE++ Dataset: Vision-Language Model Sensitivity to Semantic and Lexical Alterations](https://proceedings.neurips.cc/paper_files/paper/2024/file/200661bf8f4993b7828a45a2a90f2ecf-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Semantic equivalence detection")**
> The task of determining whether two sentences convey the same meaning, potentially despite differences in their lexical and syntactic structure.

**[Too Consistent to Detect: A Study of Self-Consistent Errors in LLMs](https://aclanthology.org/2025.emnlp-main.238.pdf) (as "Semantic equivalence judgment")**
> Determining whether two responses are semantically equivalent by mutual entailment.

**[An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf) (as "Duplicate question detection")**
> The task of determining whether two questions have the same semantic meaning.

## Relationships

### Paraphrase detection →
- **MRPC** (measurements) — *measured_by*
  > paraphrasing: QQP, MRPC (Dolan & Brockett, 2005); (Section 5.1)
  - [Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)
- **QQP** (measurements) — *measured_by*
  > paraphrasing: QQP, MRPC (Dolan & Brockett, 2005); (Section 5.1)
  - [Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)
- **PAWS** (measurements) — *measured_by*
  > PAWS ... Paraphrase Identification (Table 1: Dataset Statistics.)
  - [Dynamic Fisher-weighted Model Merging via Bayesian Optimization](https://aclanthology.org/2025.naacl-long.254.pdf)
- **GLUE** (measurements) — *measured_by*
  > This benchmark we use covers paraphrase detection (MRPC, QQP), sentiment classification (SST-2), natural language inference (MNLI, RTE, QNLI), and linguistic acceptability (CoLA). (Section 4.3)
  - [Enhancing Language Model Hypernetworks with Restart: A Study on Optimization](https://aclanthology.org/2025.naacl-long.397.pdf)
- **PAWS-X** (measurements) — *measured_by*
  > For paraphrase identification, we used the Spanish portion of PAWS-X (Yang et al., 2019), a multilingual dataset containing adversarially constructed paraphrase pairs. (Section 5.2)
  - [Exploring morphology-aware tokenization: A case study on Spanish language modeling](https://aclanthology.org/2025.emnlp-main.1552.pdf)
