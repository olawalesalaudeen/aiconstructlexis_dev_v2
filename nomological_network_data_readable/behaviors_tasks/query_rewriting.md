# Query rewriting
**Type:** Behavior  
**Referenced in:** 18 papers  
**Also known as:** Query rephrasing, Prompt rewriting, Prompt polishing, Query reformulation, Query paraphrasing, Query refinement  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is as rewriting a user query or prompt so it is clearer, semantically richer, or better aligned with a downstream system. Papers variously define success as clarifying ambiguous expressions, adding semantic information, satisfying a required aspect and value, making a question search-engine-friendly, or transforming a natural-language description into a more effective structured prompt; some formulations explicitly require preserving meaning, intent, or faithfulness to the original prompt. A smaller cluster of vision-oriented papers instead emphasizes enriching queries with visual details and aesthetic expectations, or removing stylistic biases, platform-specific keywords, and conflicting information, while another line treats prompt rewriting as rephrasing harmful queries while preserving meaning.

**Variants.** Papers use several nearby names for the behavior, including query rephrasing or paraphrasing, query reformulation, prompt rewriting, prompt polishing, and query refinement. The settings span online shopping constraint editing, text-to-SQL schema alignment, multi-hop question answering, multimodal search, text-to-image generation, jailbreak prompt generation, and general-assistant search revision when initial results are unsatisfactory. Many of these variants are tied to downstream retrieval, and several papers claim a causal relationship from Query rewriting to Information retrieval; one iterative QA paper also claims a causal relationship from Thought generation to Query rewriting, and one text-to-image paper claims a causal relationship from Query rewriting to Image generation.

**Space of elicitation and scores.** Only one measurement instrument is linked to query rewriting, TopiOCQA. The linked paper describes it as consisting of multi-turn conversational queries, and no other measurement instrument is linked to query rewriting in these papers.

**What it is taken as evidence of.** Papers do not present a single shared construct framing for query rewriting. Instead, it is linked to three constructs in different ways: it is related to Disambiguation ability, while In-context learning and Reasoning are each claimed to have causal relationships toward query rewriting, with authors saying they "leverage the ICL capability of large language models" and the "reasoning ability" of LLMs for rewriting.

## Sources

**[Aligning Vision Models with Human Aesthetics in Retrieval: Benchmarks and Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/9d3faa41886997cfc2128b930077fa49-Paper-Conference.pdf) (as "Query rephrasing")**
> The task of rewriting a user's search query, typically using an LLM, to enrich it with additional visual details, stylistic elements, and aesthetic expectations.

**[Shopping MMLU: A Massive Multi-Task Online Shopping Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2049d75dd13db049897562bcf7d59da8-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The task of modifying a given user query based on a specified constraint, such as an aspect and value.

**[AP-Adapter: Improving Generalization of Automatic Prompts on Unseen Text-to-Image Diffusion Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf) (as "Prompt rewriting")**
> The task of transforming a natural language description into a more effective, structured prompt (e.g., a keyword-based prompt) for a generative model.

**[Multimodal Large Language Models Make Text-to-Image Generative Models Align Better](https://proceedings.neurips.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf) (as "Prompt polishing")**
> The task of rewriting user-written text prompts to remove stylistic biases, platform-specific keywords, and conflicting information.

**[ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf) (as "Query reformulation")**
> The task of modifying or rewriting a query for a subsequent retrieval step, typically by incorporating information from previously retrieved documents to focus on unresolved aspects of the original question.

**[UniRAG: Unified Query Understanding Method for Retrieval Augmented Generation](https://aclanthology.org/2025.acl-long.693.pdf) (as "Query paraphrasing")**
> Rewriting a user query using synonymous expressions or clearer formulations to resolve ambiguity while preserving intent, such as rephrasing 'Who was the spouse of Anna Karina from 1968 to 1974?' as 'Anna Karina spouse from 1968 to 1974'.

**[GAIA: a benchmark for General AI Assistants](https://proceedings.iclr.cc/paper_files/paper/2024/file/25ae35b5b1738d80f1f03a8713e405ec-Paper-Conference.pdf) (as "Query refinement")**
> The observable action of modifying or improving a search query or internal prompt when the initial results are unsatisfactory.

## Relationships

### Query rewriting →
- **Information retrieval** (behaviors tasks) — *causes*
  > We find that using this rephrased query in retrieval drastically boosts the aesthetic quality more than we ever expected.
  - [Aligning Vision Models with Human Aesthetics in Retrieval: Benchmarks and Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/9d3faa41886997cfc2128b930077fa49-Paper-Conference.pdf)
- **Image generation** (behaviors tasks) — *causes*
  > The goal of the LLM is to “rewrite” the prompt passed into the T2I model, such that the final generated image improves in quality, while maintaining or improving the faithfulness to the original text prompt. (Section 4.4)
  - [LLMs can see and hear without any training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ashutosh25a/ashutosh25a.pdf)

### → Query rewriting
- **In-context learning** (constructs) — *causes*
  > we leverage the ICL capability of large language models (LLMs) [23, 30] to generate automatic keyword prompts similar to manually crafted prompts (Section 1).
  - [AP-Adapter: Improving Generalization of Automatic Prompts on Unseen Text-to-Image Diffusion Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b2077e6d66da612fcb701589efa9ce88-Paper-Conference.pdf)

### Associated with
- **Disambiguation ability** (constructs)
  > we argue existing disambiguation works fall in three major policies... Query Rewriting, Middle. Long Form Answer Generation, Right. Asking Clarifying Questions. (Section 3, Figure 2)
  - [Disambiguation in Conversational Question Answering in the Era of LLMs and Agents: A Survey](https://aclanthology.org/2025.emnlp-main.482.pdf)
- **Reasoning** (constructs)
  > We find that utilizing the reasoning ability of large language models (LLMs) to rephrase the search query and extend the aesthetic expectations can make up for this shortcoming. (Abstract)
  - [Aligning Vision Models with Human Aesthetics in Retrieval: Benchmarks and Algorithms](https://proceedings.neurips.cc/paper_files/paper/2024/file/9d3faa41886997cfc2128b930077fa49-Paper-Conference.pdf)
- **Thought generation** (behaviors tasks)
  > Thought-concat appends the current thought t(i) to the query, constructing the updated query as q(i+1) = [t(i); q(i)], where [a; b] denotes the concatenation of a and b. (Section 4.2.4)
  - [ReSCORE: Label-free Iterative Retriever Training for Multi-hop Question Answering with Relevance-Consistency Supervision](https://aclanthology.org/2025.acl-long.16.pdf)
- **TopiOCQA** (measurements)
  > We employ TopiOCQA (Adlakha et al., 2022) and QReCC (Anantha et al., 2021), both of which consist of multi-turn conversational queries. These datasets contain context-dependent questions...requiring disambiguation based on prior conversation turns. Hence, in the sub-task, LLM clarifies the original question into a standalone question. (Section 3)
  - [CIFLEX: Contextual Instruction Flow for Sub-task Execution in Multi-Turn Interactions with a Single On-Device LLM](https://aclanthology.org/2025.emnlp-main.533.pdf)
