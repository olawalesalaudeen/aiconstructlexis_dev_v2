# Human baseline
**Type:** Measurement  
**Referenced in:** 31 papers  
**Also known as:** Human performance evaluation, Human performance study, Human-baseline study, Human experiment, Human CAI study, Human expert forecasts, Professional Nutritionist Study, Expert user study, Human validation study, Offline human survey, Human baseline evaluation, Human performance comparison, Human-level baseline, Human performance validation, Human benchmark  

## State of the Field

**What it is.** Across papers, the prevailing usage is a human evaluation protocol run on the same benchmark tasks as a model, to provide a performance reference, baseline, or upper-bound. Most definitions describe people completing prompts, puzzles, questions, web or OS tasks, extraction tasks, or meal-estimation examples, with variants ranging from independent annotators and native speakers to domain experts, authors, volunteers, Prolific participants, and humans acting as LLM agents. A smaller line of work uses closely related procedures such as expert forecasts or an offline survey in which participants view clues, submit a guess after each clue, and indicate whether they would buzz. Some implementations cover the full task set, while others are restricted to subsets such as 100 randomly selected table-updating pairs, 75 abstracts, or 1000 questions.

**What it is claimed to measure.** Papers do not record this instrument as measuring any construct or behavioral indicator: it is linked to no constructs and no behavioral indicators. The only explicit relational claim is that one paper uses a human baseline to measure OSWorld, and reports that the human performance study shows OSWorld examples are more time-consuming and challenging than prior work.

**Space of uses.** Across papers, it is usually presented inside another benchmark or dataset as a comparison procedure for model results. Authors use it to contextualize model scores, provide a human-level reference, verify answerability or consistency, or compare time, efficiency, and accuracy, and the only explicit linked instrument is OSWorld. The reported forms range from small-scale studies with authors and naive volunteers, to expert and native-speaker evaluations, to larger user studies and human-acting-as-agent setups.

**Concerns raised.** One paper states that its human-baseline evaluation was restricted to 100 randomly selected table-updating pairs because of cost and time constraints. Another notes that expert forecasts were only available for some studies.

## Sources

**[Leveraging LLM For Synchronizing Information Across Multilingual Tables](https://aclanthology.org/2025.naacl-long.329.pdf)**
> A human performance benchmark for information updating, derived from independent annotators manually synchronizing tables, used to compare model outputs on a subset of 100 examples.

**[VideoWebArena:  Evaluating Long Context Multimodal Agents with Video Understanding Web Tasks](https://proceedings.iclr.cc/paper_files/paper/2025/file/5b555804d495321df2e3208cc27f4fbc-Paper-Conference.pdf) (as "Human performance evaluation")**
> A protocol where human participants attempt tasks from the benchmark to establish a baseline for success rates and efficiency, with evaluation conducted by a third party.

**[OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Human performance study")**
> An evaluation protocol where human participants (computer science students) perform the benchmark tasks to establish a baseline for performance, time, and accuracy.

**[Probing LLM World Models: Enhancing Guesstimation with Wisdom of Crowds Decoding](https://aclanthology.org/2025.emnlp-main.234.pdf) (as "Human experiment")**
> A study conducted with human participants to establish a baseline for Wisdom of Crowds effects in guesstimation tasks and to compare human performance with that of LLMs.

**[Can LLMs Help You at Work? A Sandbox for Evaluating LLM Agents in Enterprise Environments](https://aclanthology.org/2025.emnlp-main.466.pdf) (as "Human CAI study")**
> A human evaluation in which human participants acted as LLM agents to complete EnterpriseBench tasks, used to measure upper-bound performance and compare against model agents.

**[Position: LLM Social Simulations Are a Promising Research Method](https://raw.githubusercontent.com/mlresearch/v267/main/assets/anthis25a/anthis25a.pdf) (as "Human expert forecasts")**
> An evaluation protocol where human experts predict research outcomes, used as a performance baseline to compare against LLM simulation accuracy.

**[NutriBench: A Dataset for Evaluating Large Language Models in Nutrition Estimation from Meal Descriptions](https://proceedings.iclr.cc/paper_files/paper/2025/file/ef3a57e4f26b640e6f90d78cbb011feb-Paper-Conference.pdf) (as "Professional Nutritionist Study")**
> A human evaluation procedure where professional nutritionists provide carbohydrate estimates for a subset of meal descriptions to compare against LLM performance.

**[Automated Hypothesis Validation with Agentic Sequential Falsifications](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25n/huang25n.pdf) (as "Expert user study")**
> A human evaluation protocol where domain experts, such as computational biologists, perform a task like hypothesis validation, and their performance and process are compared against an automated system.

**[MOSAIC: Modeling Social AI for Content Dissemination and Regulation in Multi-Agent Simulations](https://aclanthology.org/2025.emnlp-main.325.pdf) (as "Human validation study")**
> A user study with 204 participants recruited via Prolific, comparing human and agent engagement behaviors on curated social media snapshots containing factual and false news articles.

**[GRACE: A Granular Benchmark for Evaluating Model Calibration against Human Calibration](https://aclanthology.org/2025.acl-long.962.pdf) (as "Offline human survey")**
> A data collection procedure where human participants view a sequence of clues for held-out questions and submit a guess after each clue, also indicating whether they would choose to 'buzz' at that point.

**[Can LLMs Solve Molecule Puzzles? A Multimodal Benchmark for Molecular Structure Elucidation](https://proceedings.neurips.cc/paper_files/paper/2024/file/f2b9e8e7a36d43ddfd3d55113d56b1e0-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Human baseline evaluation")**
> An evaluation protocol where human experts (six Ph.D. candidates in chemistry) solve puzzles from the MolPuzzle benchmark to establish a performance baseline for comparison with LLMs.

**[NYU CTF Bench: A Scalable Open-Source Benchmark Dataset for Evaluating LLMs in Offensive Security](https://proceedings.neurips.cc/paper_files/paper/2024/file/69d97a6493fbf016fff0a751f253ad18-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Human performance comparison")**
> An evaluation protocol comparing LLM scores on CTF challenges against scores achieved by human participants in the same competitions.

**[Optimus-1: Hybrid Multimodal Memory Empowered Agents Excel in Long-Horizon Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/5949a8750a110ce1f0631b1776c500a2-Paper-Conference.pdf) (as "Human-level baseline")**
> An evaluation protocol where 10 human volunteers perform the benchmark tasks to establish a performance reference point.

**[WildDoc: How Far Are We from Achieving Comprehensive and Robust Document Understanding in the Wild?](https://aclanthology.org/2025.emnlp-main.1172.pdf) (as "Human performance validation")**
> An evaluation protocol to verify dataset answerability by measuring human accuracy on a randomly selected subset of questions and corresponding document images.

**[TVQACML: Benchmarking Text-Centric Visual Question Answering in Multilingual Chinese Minority Languages](https://aclanthology.org/2025.emnlp-main.705.pdf) (as "Human benchmark")**
> A native-speaker human evaluation using five annotators per language to provide reference performance for the benchmark.

## Relationships

### Associated with
- **OSWorld** (measurements)
  > The human performance study indicates that task examples from OSWORLD are more time-consuming and challenging compared to those in prior work. (Section 3.2)
  - [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://proceedings.neurips.cc/paper_files/paper/2024/file/5d413e48f84dc61244b6be550f1cd8f5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Bongard Problems** (measurements)
  > “For evaluating human performances on BPs, 30 participants were recruited among Prolific users”
  - [Bongard in Wonderland: Visual Puzzles that Still Make AI Go Mad?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wust25a/wust25a.pdf)
