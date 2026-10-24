# CREPE
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Crepe  

## State of the Field

**What it is.** Across the papers, CREPE is not described in one uniform way. The prevailing benchmark-style usage treats it as an evaluation dataset for reasoning: some papers describe a causal reasoning dataset for identifying cause-effect relationships in natural language, while others describe CREPE or Crepe as a compositional reasoning benchmark that tests systematicity and productivity, including an image-text retrieval dataset with hard negatives for compositional understanding. A separate paper uses the same name for a different instrument, CREPE as "Rapid Chest X-ray Report Evaluation by Predicting Multi-category Error Counts," described as a domain-specific BERT-based, multi-head regression metric that predicts error counts in six clinical categories.

**What it is claimed to measure.** Papers link CREPE to 3 constructs and no behavioral indicators. The recorded measurement claims are spread across Causal reasoning, Compositional reasoning, and Compositionality, rather than converging on a single construct: one paper uses it for causal reasoning, one reports it as evaluating compositional reasoning, and one uses it for compositionality with a focus on systematicity and productivity. As one paper puts it, it evaluates "causal reasoning, including CREPE" (Large Language Model Cascades with Mixture of Thought Representations for Cost-Efficient Reasoning), while another says the benchmark "focuses on systematicity and productivity" (Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning).

**Space of uses.** Papers most often position CREPE as part of an evaluation suite or as a benchmark for testing model reasoning abilities. It is used to evaluate LLM cascades, several SOTA VLMs, and model ability to handle compositional data; one snippet places it alongside ARO and VALSE as benchmarks for compositional data. No measurement instrument is linked to it through the recorded relationships.

## Sources

**[Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)**
> Causal reasoning evaluation dataset that tests models on identifying cause-effect relationships in natural language.

**[ConMe: Rethinking Evaluation of Compositional Reasoning for Modern VLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/28aad3b3b315d86910d7f4ee2867dfa4-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Crepe")**
> A compositional reasoning benchmark inspired by cognitive science literature and used to test systematicity and productivity.

## Relationships

### → CREPE
- **Causal reasoning** (constructs) — *measured_by*
  > We evaluate our LLM cascade approaches on six datasets, covering... (3) causal reasoning, including CREPE (Zhang et al., 2023). (Section 3.1)
  - [Large Language Model Cascades with Mixture of Thought Representations for Cost-Efficient Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5de11e930c1bbfda5d4fc9d2b0924032-Paper-Conference.pdf)
- **Compositionality** (constructs) — *measured_by*
  > We evaluate on the CREPE benchmark (Ma et al., 2023) that focuses on systematicity (Fodor & Pylyshyn, 1988) and productivity (von Humboldt et al., 1988; Chomsky, 1956).
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **Compositional reasoning** (constructs) — *measured_by*
  > Crepe [16] also evaluates several SOTA VLMs and highlights the lack of CR abilities.
  - [ConMe: Rethinking Evaluation of Compositional Reasoning for Modern VLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/28aad3b3b315d86910d7f4ee2867dfa4-Paper-Datasets_and_Benchmarks_Track.pdf)
