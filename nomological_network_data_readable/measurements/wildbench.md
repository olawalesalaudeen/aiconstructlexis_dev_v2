# WildBench
**Type:** Measurement  
**Referenced in:** 14 papers  
**Also known as:** Wildbench, Wild-Bench  

## State of the Field

**What it is.** Most papers treat WildBench as an instruction-following benchmark, sometimes also as an automatic LLM benchmark, for assessing model responses on diverse and challenging user queries. Definitions recurrently describe real-user or natural tasks, longer or more complex prompts, and difficult multi-turn questions; some add a diverse distribution of task categories, evaluation against a reference answer with a fine-grained grading scale, human preference judgments, or a WB-Score. A smaller line of work frames it as an LLM-based evaluation framework or public dataset of model comparisons judged by an LLM-based judge.

**What it is claimed to measure.** Papers use WildBench to measure 7 constructs and 6 behavioral indicators, so its reported targets are spread across multiple capacities rather than concentrated on one. The most frequent construct-level links are conversational ability, complex reasoning, and creativity, with 4 other constructs also linked. On the behavioral side, papers report it as evaluating creative writing and data analysis, plus 4 other indicators.

**Space of uses.** Most papers position WildBench as one of a few evaluation benchmarks, commonly alongside AlpacaEval and Arena-Hard, and sometimes MT-Bench. Papers link it to 2 other instruments, LLM-as-a-judge and Chatbot Arena: some describe WildBench itself as an LLM-as-Judge benchmark or use its public dataset for LLM-based evaluation, while another paper pairs it with a public subset of Chatbot Arena for human and LLM-based evaluation.

## Sources

**[Instruct-SkillMix: A Powerful Pipeline for LLM Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/473a9a75edc46eff5ff224d53d5f7294-Paper-Conference.pdf)**
> An instruction-following benchmark that uses a diverse distribution of task categories and a fine-grained grading scale to evaluate model responses against a reference answer.

**[Polyrating: A Cost-Effective and Bias-Aware Rating System for LLM Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/d06537b4b38ccf008a54559d2c56fa23-Paper-Conference.pdf) (as "Wildbench")**
> An LLM-based evaluation framework used as a public dataset of model comparisons judged by an LLM-based judge.

**[As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf) (as "Wild-Bench")**
> A challenging instruction-following QA benchmark featuring long, multi-turn prompts and difficult questions sourced from real users.

## Relationships

### → WildBench
- **Conversational ability** (constructs) — *measured_by*
  > In this section we evaluate the Jamba-1.5 models on two chatbot scenarios: Arena-Hard (Li et al., 2024b), a set of 500 challenging user queries that uses GPT4-Turbo as a judge, and WildBench (Lin et al., 2024)... (Section 7.3)
  - [Jamba: Hybrid Transformer-Mamba Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a9ed43fa31dc8b4a7d7a673d713dcb5f-Paper-Conference.pdf)
- **Complex reasoning** (constructs) — *measured_by*
  > Complex real-user tasks usually have multiple constraints and require higher-order reasoning skills, which are well represented in WILDBENCH. (Figure 1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Creativity** (constructs) — *measured_by*
  > These tasks often require critical thinking, creativity, and technical expertise, making WILDBENCH substantially more challenging than AlpacaEval... (Section 1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Technical expertise** (constructs) — *measured_by*
  > These tasks often require critical thinking, creativity, and technical expertise, making WILDBENCH substantially more challenging than AlpacaEval... (Section 1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Long-context reasoning** (constructs) — *measured_by*
  > Thanks to these realistic user activities, WILDBENCH is a more suitable benchmark for testing the long-context problem solving abilities of LLMs. (Section 2.2)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Data analysis** (behaviors tasks) — *measured_by*
  > This dataset is particularly suited for conversion into an evaluation benchmark because it contains a diverse array of tasks that users expect LLMs to perform, such as writing assistance, coding, mathematics, data analysis, role playing, and planning. (Section 2.1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Role-playing** (behaviors tasks) — *measured_by*
  > This dataset is particularly suited for conversion into an evaluation benchmark because it contains a diverse array of tasks that users expect LLMs to perform, such as writing assistance, coding, mathematics, data analysis, role playing, and planning. (Section 2.1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Planning** (constructs) — *measured_by*
  > This dataset is particularly suited for conversion into an evaluation benchmark because it contains a diverse array of tasks that users expect LLMs to perform, such as writing assistance, coding, mathematics, data analysis, role playing, and planning. (Section 2.1)
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > We primarily evaluate all the models using two recent proposed instruction-following QA benchmarks: Arena-Hard (Li et al., 2024) and Wild-Bench(Lin et al., 2024).
  - [As Simple as Fine-tuning: LLM Alignment via Bidirectional Negative Feedback Loss](https://proceedings.iclr.cc/paper_files/paper/2025/file/4bc4e9ecd5ae4a75048dc216a770cba1-Paper-Conference.pdf)
- **Creative writing** (behaviors tasks) — *measured_by*
  > “The tasks in WILDBENCH typically demand higher-order reasoning, such as ... creative writing with multiple constraints on the style and content”
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > "we evaluate the evaluation protocols used in three automatic LLM benchmarks for instruction-following4 – AlpacaEval (Li et al., 2023c), ArenaHard (Li et al., 2024b), and WildBench (Lin et al., 2024)"
  - [ReIFE: Re-evaluating Instruction-Following Evaluation](https://aclanthology.org/2025.naacl-long.610.pdf)
- **Instruction following ability** (constructs) — *measured_by*
  > We primarily assess models’ general instruction-following capabilities on three evaluation benchmarks: AlpacaEval2 (Li et al., 2023b), Arena-Hard (Li et al., 2024b) and Wild-Bench (Lin et al., 2024). (Section 5)
  - [R.I.P.: Better Models by Survival of the Fittest Prompts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25u/yu25u.pdf)
- **Chatbot Arena** (measurements) — *correlates*
  > “WILD-BENCH results demonstrate a strong correlation with the human-voted Elo ratings from Chatbot Arena on hard tasks.”
  - [WildBench: Benchmarking LLMs with Challenging Tasks from Real Users in the Wild](https://proceedings.iclr.cc/paper_files/paper/2025/file/771155abaae744e08576f1f3b4b7ac0d-Paper-Conference.pdf)

### Associated with
- **LLM-as-a-judge** (measurements)
  > We use the public dataset from Wildbench (Lin et al., 2024) to obtain our LLM-based evaluation. (Section 4.2)
  - [Polyrating: A Cost-Effective and Bias-Aware Rating System for LLM Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/d06537b4b38ccf008a54559d2c56fa23-Paper-Conference.pdf)
