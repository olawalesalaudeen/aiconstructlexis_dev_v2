# TyDi QA
**Type:** Measurement  
**Referenced in:** 23 papers  
**Also known as:** TyDiQA, TydiQA, TYDIQA, Tydi QA  

## State of the Field

**What it is.** Across the surveyed work, the dominant framing is a multilingual question answering benchmark or dataset, usually described as spanning typologically diverse languages. Most definitions describe it as covering 11 languages and requiring answers from a given passage or Wikipedia article, sometimes in a gold-passage setup and sometimes as answer-span identification; one paper instead says it includes 9 kinds of languages. Papers also refer to language-specific subsets such as TyDiQA-FI, TyDiQA-ID, and TyDiQA-SW, and some uses narrow to Wikipedia-based variants such as "TyDi QA (wiki)" or the Indonesian set.

**What it is claimed to measure.** Papers link it to 2 constructs and 4 behavioral indicators. The prevailing use is to measure multilingual ability, with papers explicitly using it for multilingual ability, multilinguality, or multilingual capabilities; question answering is the other recurring behavioral target, and some papers more specifically use it to measure multilingual question answering or machine reading comprehension. A smaller line of work also reports it as measuring instruction following and general ability, so the recorded measurement claims are spread across several targets rather than only one.

**Space of uses.** In use, papers usually place it as one task within broader evaluation suites rather than as a standalone protocol. The only linked instrument is Open LLM Leaderboard, where one paper includes TydiQA among its evaluation tasks, and papers commonly list it alongside MMLU, BBH, GSM8K or GSM, and HumanEval. Some multilingual evaluations pair it with other QA datasets, and one paper repurposes the Indonesian subset from reading comprehension into open-domain QA by removing the context passage.

## Sources

**[Language Model Cascades: Token-Level Uncertainty And Beyond](https://proceedings.iclr.cc/paper_files/paper/2024/file/11f5520daf9132775e8604e89f53925a-Paper-Conference.pdf) (as "TyDiQA")**
> A multilingual question answering benchmark included in the expanded evaluation set, with language-specific subsets used in evaluation.

**[SALMON: Self-Alignment with Instructable Reward Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/dda5cac5272a9bcd4bc73d90bc725ef1-Paper-Conference.pdf) (as "TydiQA")**
> A benchmark for evaluating multilingual question answering capabilities across a diverse set of typologically different languages.

**[Data Pruning by Information Maximization](https://proceedings.iclr.cc/paper_files/paper/2025/file/7d848891e365ca623dc8352db9782585-Paper-Conference.pdf) (as "TYDIQA")**
> TyDi QA, a multilingual question-answering benchmark used here to evaluate instruction-tuned LLMs.

**[Provence: efficient and robust context pruning for retrieval-augmented generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/5e956fef0946dc1e39760f94b78045fe-Paper-Conference.pdf)**
> A single-hop question answering benchmark evaluated with Wikipedia datastore contexts.

**[Efficient stagewise pretraining via progressive subnetworks](https://proceedings.iclr.cc/paper_files/paper/2025/file/b21ae5a5df83632324b61b595ab653b9-Paper-Conference.pdf) (as "Tydi QA")**
> A question answering dataset covering 11 typologically diverse languages, requiring models to answer questions given a Wikipedia article.

## Relationships

### → TyDi QA
- **Multilingual ability** (constructs) — *measured_by*
  > We use Big Bench Hard (BBH; Suzgun et al. (2022)) as a testbed for reasoning ability, HumanEval (Chen et al., 2021) for coding ability, and TydiQA (Clark et al., 2020) for multilingual ability.
  - [SALMON: Self-Alignment with Instructable Reward Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/dda5cac5272a9bcd4bc73d90bc725ef1-Paper-Conference.pdf)
- **Multilingual question answering** (behaviors tasks) — *measured_by*
  > TYDIQA (Clark et al., 2020) is a multilingual question-answer dataset that includes 9 kinds of languages.
  - [Data Pruning by Information Maximization](https://proceedings.iclr.cc/paper_files/paper/2025/file/7d848891e365ca623dc8352db9782585-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > TydiQA [7] Multilingual QA (Table 1)
  - [TSDS: Data Selection for Task-Specific Model Finetuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/13848b5893119ff772b69812c95914fa-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > To evaluate the general capabilities, we utilized GSM8K (EM) (Cobbe et al., 2021), BBH (EM) (Cobbe et al., 2021), MMLU (EM) (Hendrycks et al., 2020), TydiQA (F1) (Clark et al., 2020), and WikiText (ppl) (Merity et al., 2016), following Ivison et al. (2023). (Section 4)
  - [Model Surgery: Modulating LLM's Behavior Via Simple Parameter Editing](https://aclanthology.org/2025.naacl-long.321.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > We adopt the Indonesian set from TyDi QA (Clark et al., 2020) for reading comprehension, which is based on Indonesian Wikipedia with human-written questions. (Section 3.3)
  - [LORAXBENCH: A Multitask, Multilingual Benchmark Suite for 20 Indonesian Languages](https://aclanthology.org/2025.emnlp-main.881.pdf)

### Associated with
- **Open LLM Leaderboard** (measurements)
  > “We adopt ﬁve OpenLLM Leaderboard tasks as our benchmark for evaluation, including MMLU (Hendrycks et al., 2020), TruthfulQA (Lin et al., 2021), GSM (Cobbe et al., 2021), BBH (Suzgun et al., 2022), TydiQA (Clark et al., 2020).”
  - [Improving Data Efficiency via Curating LLM-Driven Rating Systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/faa6144674bce872365874c576b4f56f-Paper-Conference.pdf)
