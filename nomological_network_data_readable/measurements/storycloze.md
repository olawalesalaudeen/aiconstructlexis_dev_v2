# StoryCloze
**Type:** Measurement  
**Referenced in:** 16 papers  
**Also known as:** Story Cloze  

## State of the Field

**What it is.** Papers most commonly describe StoryCloze as a benchmark for story understanding and commonsense reasoning, usually framed as choosing the correct ending to a short story. Most definitions specify a four-sentence story and connect the task to script knowledge, narrative understanding, or coherence, while some instead describe five-sentence stories, cloze-style story completion, or sentence completion. One paper further describes it as a dataset of short stories with a valid and an invalid ending, originally used for story understanding and adapted there for open-ended generation.

**What it is claimed to measure.** Papers link StoryCloze to 1 construct and 2 behavioral indicators. The prevailing measurement claim is that it measures Commonsense reasoning: papers place it among common sense reasoning tasks and describe the final sentence as being selected based on commonsense knowledge. Smaller uses treat it as measuring Multiple-choice question answering and Story generation, with one paper listing it among multiple-choice tasks and another using it for a story generation task while noting its original use for story understanding.

**Space of uses.** In use, papers most often position StoryCloze as a zero-shot or downstream benchmark, sometimes reporting zero-shot accuracy and sometimes grouping it with common sense reasoning, cloze, and completion tasks. Some papers frame it as part of broader language-task suites, and some refer to it specifically as sentence completion. No other measurement instrument is linked to it.

## Sources

**[Dynamic Sparse No Training:  Training-Free Fine-tuning for Sparse LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/0147d967a5db3b8dde08d2a327b24568-Paper-Conference.pdf)**
> A commonsense reasoning benchmark for evaluating story understanding and script knowledge, requiring the selection of a correct ending to a four-sentence story.

**[Superpose Task-specific Features for Model Merging](https://aclanthology.org/2025.emnlp-main.210.pdf) (as "Story Cloze")**
> A benchmark for sentence completion that tests story understanding and commonsense reasoning.

## Relationships

### → StoryCloze
- **Commonsense reasoning** (constructs) — *measured_by*
  > For the text modality, we compare the zero-shot performance on some common sense reasoning tasks: PIQA (Bisk et al., 2020), ARC-Challenge, ARC-Easy (Clark et al., 2018), StoryCloze (Mostafazadeh et al., 2016), Winograd, and Winogrande (Sakaguchi et al., 2021). (Table 1)
  - [Jointly Training Large Autoregressive Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d564edd2bf015ac07c8031ab3f9839b0-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > For the multiple-choice tasks, we use datasets: COPA (Gordon et al., 2012), StoryCloze (Mostafazadeh et al., 2016), NLI (Bowman et al., 2015), MMLU (Hendrycks et al., 2021), SST2 (Socher et al., 2013), SST5 (Socher et al., 2013), BoolQ (Clark et al., 2019), and Winogrande (Sakaguchi et al., 2020)... (Section 4.1)
  - [Semantics-Adaptive Activation Intervention for LLMs via Dynamic Steering Vectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4d26a95fd83f8e590f81c54ae670b5d-Paper-Conference.pdf)
- **Story generation** (behaviors tasks) — *measured_by*
  > For our story generation task, we use the StoryCloze (Mostafazadeh et al., 2017) dataset, which was originally used for story understanding, and consists of short stories each with a valid ending sentence as well as an invalid ending. (Section 3)
  - [Forking Paths in Neural Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/2b6a8ca3d06ffa2e044bff8c723863ff-Paper-Conference.pdf)
