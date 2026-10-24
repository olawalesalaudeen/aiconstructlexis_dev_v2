# TofuEval
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across the papers, TofuEval is most commonly described as a dataset or benchmark for evaluating factual consistency in dialogue summarization. Several descriptions make this more specific, calling it a topic-focused dialogue summarization benchmark or dataset that emphasizes marginal or secondary topics, including factual alignment under topic shifts, and one paper describes it as a more challenging benchmark on topic-focused dialogue summarization. Some papers also specify its contents as an annotated subset of MediaSum and MeetingBank with human-annotated sentence-level faithfulness judgments and critiques, though one description presents those subsets as spanning a mix of news and dialogue domains.

**What it is claimed to measure.** Papers link TofuEval to one construct and two behavioral indicators. The prevailing construct-level use is to measure Faithfulness, with one paper using its sentence-level faithfulness judgments and critiques to design intrinsic evaluation tasks for DETECT, CRITIQUE, and REFINE. It is also reported as measuring Meeting summarization and Text summarization, so the construct claims converge on Faithfulness while the behavioral-indicator links remain within summarization tasks.

**Space of uses.** In use, papers position TofuEval as an evaluation benchmark for summarization assessment. One paper uses it for intrinsic evaluation of detection, critique, and reranking procedures, and another includes it alongside CNN-DM and XSum when testing longer-form generation tasks. Papers also place it among the few frameworks specifically developed for meeting and dialogue summarization.

## Sources

**[FactCG: Enhancing Fact Checkers with Graph-Based Multi-Hop Data](https://aclanthology.org/2025.naacl-long.258.pdf)**
> A dataset for evaluating factual consistency in dialogue summarization.

## Relationships

### → TofuEval
- **Faithfulness** (constructs) — *measured_by*
  > Using TofuEval (Tang et al., 2024c), a dataset with human-annotated sentence-level faithfulness judgments and critiques, we design intrinsic evaluation tasks for each of the three subtasks, DETECT, CRITIQUE, and REFINE (Section 1)
  - [MAMM-Refine: A Recipe for Improving Faithfulness in Generation with Multi-Agent Collaboration](https://aclanthology.org/2025.naacl-long.498.pdf)
- **Text summarization** (behaviors tasks) — *measured_by*
  > To test ADACAD on longer-form generation tasks, we evaluate on three standard summarization tasks: CNN-DM (See et al., 2017), XSum (Narayan et al., 2018), and TofuEval (Tang et al., 2024). (Section 4.1).
  - [AdaCAD: Adaptively Decoding to Balance Conflicts between Contextual and Parametric Knowledge](https://aclanthology.org/2025.naacl-long.581.pdf)
- **Meeting summarization** (behaviors tasks) — *measured_by*
  > Among these, CREAM (Gong et al., 2024), MESA (Kirstein et al., 2025b), and TofuEval (Tang et al., 2024) stand out as one of the few frameworks specifically developed for meeting and dialogue summarization... (Section 5.2).
  - [Summarizing Speech: A Comprehensive Survey](https://aclanthology.org/2025.emnlp-main.1388.pdf)
