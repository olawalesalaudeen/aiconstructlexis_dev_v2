# Wikipedia
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across papers, Wikipedia is described as a text source used in several ways. Some authors treat it as the external knowledge base from which retrieved documents are drawn for RAG evaluation, with one paper stating, "We employ Wikipedia as the knowledge base K" and referring to a "Wikimedia dump provided by Cohere" (Improving Multilingual Retrieval-Augmented Language Models through Dialectic Reasoning Argumentations). Other papers describe it as a text corpus or evaluation dataset, including a MassiveText Wikipedia variant used for supporting experiments and a pre-training dataset setting.

**What it is claimed to measure.** Papers link Wikipedia to no constructs and one behavioral indicator. The only reported measurement claim is that it measures node classification, based on a performance comparison on "three benchmark datasets". No construct-level use is recorded.

**Space of uses.** No other measurement instrument is linked to it. Papers position it as the knowledge base K in retrieval-augmented evaluation, as a language or pre-training dataset considered in evaluation, and as an auxiliary setting for supporting experiments, with one study noting "supporting experiments on Wikipedia to confirm our results remain robust at larger scales" (Understanding Transformers via N-Gram Statistics).

## Sources

**[Improving Multilingual Retrieval-Augmented Language Models through Dialectic Reasoning Argumentations](https://aclanthology.org/2025.emnlp-main.461.pdf)**
> Wikipedia, used as the external knowledge base from which retrieved documents are drawn for RAG evaluation.

## Relationships

### → Wikipedia
- **Language modeling** (behaviors tasks) — *measured_by*
  > we ﬁnd that for ... 68% of LLM next-token distributions on ... Wikipedia, respectively, their top-1 predictions agree with those provided by our N -gram rulesets. (Abstract)
  - [Understanding Transformers via N-Gram Statistics](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1c446eebd9a317dd0e96b16908c821a-Paper-Conference.pdf)
