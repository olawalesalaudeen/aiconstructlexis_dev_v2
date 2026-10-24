# Long-form question answering
**Type:** Behavior  
**Referenced in:** 20 papers  
**Also known as:** Long-form answer generation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats long-form question answering as generating extended, paragraph-length or multi-sentence answers to open-ended questions, rather than short or extractive responses. Most definitions add synthesis and contextual coherence, and several retrieval-oriented papers narrow this to answering with supporting context, retrieved evidence, or multiple retrieved documents; others define it over long documents or tables. One paper describes it as aiming to synthesize information from disparate retrieval sources to provide in-depth, paragraph-length responses (Improving Contextual Faithfulness of Large Language Models via Retrieval Heads-Induced Optimization).

**Variants.** Papers use nearby labels such as long-form QA, LFQA, and, less often, long-form answer generation. The behavior is studied in several settings: retrieval-augmented generation with supporting context, question answering over long documents, free-form answers synthesized from tables, financial-domain questions that require comprehensive answers, multilingual and culturally specific QA, and personalized answer generation. Some work contrasts the open-ended form with a multiple-choice counterpart built from the same questions, and other papers treat it as a separate downstream task alongside open-ended generation, factual knowledge, code completion, or summarization.

**Space of elicitation and scores.** Papers measure this behavior with 5 instruments, most often ELI5, followed by TruthfulQA, ASQA, FeTaQA, and UNCLE. These instruments are described as datasets or benchmarks: ELI5 is used for long-form question answering and, in one use, includes questions, model-generated answers, and supporting context; TruthfulQA is described as requiring long-form and truthful responses; FeTaQA is used for more complex table-based long-form QA and is scored with ROUGE-1, ROUGE-2, and ROUGE-L; ASQA appears as a dataset for this category in disambiguation work; and UNCLE evaluates uncertainty expression in long- and short-form QA.

**What it is taken as evidence of.** Papers rarely treat long-form question answering as direct evidence of a broader construct. The only construct papers connect to it is Disambiguation ability, and that relationship is recorded as related rather than measured_by or correlates: one survey places long-form answer generation alongside query rewriting and asking clarifying questions as policies in disambiguation work. No other construct relation is reported.

## Sources

**[Verifiable by Design: Aligning Language Models to Quote from Pre-Training Data](https://aclanthology.org/2025.naacl-long.191.pdf)**
> Generating extended, paragraph-length responses to open-ended questions, often requiring synthesis of information and contextual coherence.

**[RAGChecker: A Fine-grained Framework for Diagnosing Retrieval-Augmented Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/27245589131d17368cccdfa990cbf16e-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Long-form answer generation")**
> The task of generating comprehensive, detailed answers to questions, rather than short, extractive responses.

## Relationships

### Long-form question answering →
- **ELI5** (measurements) — *measured_by*
  > Table 2: Accuracy on various long-form NLP tasks. ... Long-form QA ... ELI5 (Table 2)
  - [A Theory for Token-Level Harmonization in Retrieval-Augmented Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/5a461bdff86cc07e976bb6c518810398-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > one Long-form Question Answering dataset, TruthfulQA [50], that requires the generation of long-form and truthful responses. (Section 4.1).
  - [xRAG: Extreme Context Compression for Retrieval-augmented Generation with One Token](https://proceedings.neurips.cc/paper_files/paper/2024/file/c5cf13bfd3762821ef7607e63ee90075-Paper-Conference.pdf)
- **FeTaQA** (measurements) — *measured_by*
  > For more complex tasks in FeTaQA, which involve long-form question answering, we evaluate performance using ROUGE-1, ROUGE-2, and ROUGE-L metrics
  - [H-STAR: LLM-driven Hybrid SQL-Text Adaptive Reasoning on Tables](https://aclanthology.org/2025.naacl-long.445.pdf)
- **ASQA** (measurements) — *measured_by*
  > “To the best of our knowledge, ASQA (Stelmakh et al., 2022) is the only dataset that falls into this category. ASQA is a long-form QA dataset derived from a subset of ambiguous questions in the AmbigNQ dataset (Min et al., 2020). Its statistics and corresponding URL are provided in Table 4. The dataset is designed to evaluate how well systems can generate comprehensive answers that cover all valid interpretations.”
  - [Disambiguation in Conversational Question Answering in the Era of LLMs and Agents: A Survey](https://aclanthology.org/2025.emnlp-main.482.pdf)
- **UNCLE** (measurements) — *measured_by*
  > we first introduce UNCLE, a benchmark designed to evaluate uncertainty expression in both long- and short-form question answering (QA). (Abstract)
  - [UNCLE: Benchmarking Uncertainty Expressions in Long-Form Generation](https://aclanthology.org/2025.emnlp-main.1543.pdf)

### Associated with
- **Disambiguation ability** (constructs)
  > we argue existing disambiguation works fall in three major policies... Query Rewriting, Middle. Long Form Answer Generation, Right. Asking Clarifying Questions. (Section 3, Figure 2)
  - [Disambiguation in Conversational Question Answering in the Era of LLMs and Agents: A Survey](https://aclanthology.org/2025.emnlp-main.482.pdf)
