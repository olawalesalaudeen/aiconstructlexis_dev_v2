# Information synthesis
**Type:** Behavior  
**Referenced in:** 12 papers  
**Also known as:** Information integration, Information aggregation, Aggregation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is as aggregation or combination of information that is scattered across a long context, a document, or multiple sources into a single output. Most definitions stress information that is broadly distributed rather than localized, and frame success as producing a coherent answer or unified output, or completing tasks such as sorting or ordering; one benchmark describes it as "synthesizing information to answer complex questions" (CRAG - Comprehensive RAG Benchmark). A smaller line of work treats it as integration within a clinical dialogue, where gathered patient information from conversation history is aggregated to update understanding of the patient's condition.

**Variants.** Papers use several near-synonymous labels for the behavior, including information aggregation, aggregation, information integration, and information synthesis. The settings range from long-document and multi-document tasks that require using the full context, to cross-source tasks over web pages, knowledge graphs, or structured data sources, and to clinical dialogue where question-answer pairs are appended to a conversation log and patient knowledge is updated. Concrete variants mentioned include sorting or ordering tasks, word extraction over the full context, aggregation of information scattered throughout a paper, and frequency analysis or summarization over distributed spans.

**Space of elicitation and scores.** Papers link this behavior to 3 measurement instruments. The most recurrent is RULER, described as a synthetic benchmark whose task domains include Aggregation; the others are 2WikiMultiHopQA, used to assess cross-document reasoning and information integration with Wikipedia data, and ZeroSCROLLS, through an Information Aggregation task labeled BookSumSort. The linked instruments are therefore a synthetic aggregation benchmark, a multi-hop cross-document QA dataset, and a task suite containing an explicitly named information aggregation task.

**What it is taken as evidence of.** Only one construct link is reported. One paper says information synthesis is related to Reasoning, stating that reasoning ability depends partly on effectively integrating new information into an existing knowledge base. No other construct is linked in the papers.

## Sources

**[MediQ: Question-Asking LLMs and a Benchmark for Reliable Interactive Clinical Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/32b80425554e081204e5988ab1c97e9a-Paper-Conference.pdf) (as "Information integration")**
> Aggregating gathered patient information from conversation history to update understanding of the patient condition.

**[Found in the Middle: How Language Models Use Long Contexts Better via Plug-and-Play Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ffdbbe354893979367f93e2121e37dd-Paper-Conference.pdf) (as "Information aggregation")**
> The task of collecting and synthesizing information from various parts of a long document or multiple documents to perform a task like sorting or ordering.

**[CRAG - Comprehensive RAG Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/1435d2d0fca85a84d83ddcb754f58c29-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The process of integrating and combining information from multiple different sources, such as web pages and knowledge graphs, to generate a coherent answer.

**[CURIE: Evaluating LLMs on Multitask Scientific Long-Context Understanding and Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ae4999aefb509d75d8608e07280922c-Paper-Conference.pdf) (as "Aggregation")**
> Combining information scattered throughout a document into a unified output.

## Relationships

### Information synthesis →
- **RULER** (measurements) — *measured_by*
  > “RULER (Hsieh et al., 2024): a synthetic benchmark with 13 tasks categorized into 4 domains: Needle-in-a-Haystack (Retrieval), Multi-Hop Tracing, Aggregation, and Question Answering.”
  - [Star Attention: Efficient LLM Inference over Long Sequences](https://raw.githubusercontent.com/mlresearch/v267/main/assets/acharya25a/acharya25a.pdf)
- **ZeroSCROLLS** (measurements) — *measured_by*
  > "we choose seven tasks from ZeroSCROLLS [34], spanning all four task categories: ④ Information Aggregation (BookSumSort)"
  - [Found in the Middle: How Language Models Use Long Contexts Better via Plug-and-Play Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ffdbbe354893979367f93e2121e37dd-Paper-Conference.pdf)
- **2WikiMultiHopQA** (measurements) — *measured_by*
  > ...and two multi-hop QA datasets: Adversarial HotpotQA (Yang et al., 2018), and 2WikiMultihopQA (Ho et al., 2020), which assess cross-document reasoning and information integration using Wikipedia data. (Section 4.1)
  - [Bridging External and Parametric Knowledge: Mitigating Hallucination of LLMs with Shared-Private Semantic Synergy in Dual-Stream Knowledge](https://aclanthology.org/2025.emnlp-main.549.pdf)
