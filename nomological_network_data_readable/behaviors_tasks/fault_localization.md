# Fault localization
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Bug localization, Issue localization  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats it as locating the source of a software problem in code, whether described as the source of a bug or failure within code or a repository, or as the files, functions, or lines responsible for a reported issue. Most descriptions agree that the task is to identify the responsible code location, though they differ in scope, from general bug or failure localization to inferring which files or functions caused a reported crash from limited diagnostic information. A narrower formulation also stresses speed, describing agents that "pinpoint the source of an issue remarkably quickly."

**Variants.** Papers use the names fault localization, bug localization, and issue localization. The studied settings range from repository-level debugging to kernel crash reports and reported software issues, with outputs framed as relevant files, functions, or lines of code. A smaller line of usage highlights specific approaches or neighboring distinctions, including "spectrum-based fault localization" to guide context retrieval and a contrast between localizing an issue and "root cause" analysis.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, papers operationalize it through tasks such as bug localization from a given kernel crash report or locating the file and functions implicated by a reported issue, and one survey places it within a "two-phase process for fault localization and repair."

**What it is taken as evidence of.** No construct is linked to it, so the papers do not present a shared view of it as evidence of a named higher-level construct. The only other recorded link is relational: one paper describes code debugging as related to fault localization, stating that debugging involves steps such as fault localization and patch generation.

## Sources

**[Code to Think, Think to Code: A Survey on Code-Enhanced Reasoning and Reasoning-Driven Code Intelligence in LLMs](https://aclanthology.org/2025.emnlp-main.130.pdf)**
> Identifying the source of a bug or failure within code or a repository.

**[kGym: A Platform and Dataset to Benchmark Large Language Models on Linux Kernel Crash Resolution](https://proceedings.neurips.cc/paper_files/paper/2024/file/8e9ed2a28af7d9085180e3817b2c9a57-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Bug localization")**
> The ability to infer which code files or functions are responsible for a reported crash from limited diagnostic information.

**[SWE-Lancer: Can Frontier LLMs Earn $1 Million from Real-World Freelance Software Engineering?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/miserendino25a/miserendino25a.pdf) (as "Issue localization")**
> The action of rapidly identifying the specific files, functions, or lines of code that are the source of a reported software issue.

## Relationships

### Associated with
- **Code debugging** (behaviors tasks)
  > Software debugging is a time-consuming endeavor involving a series of steps, such as fault localization and patch generation, each requiring thorough analysis and a deep understanding of the underlying logic.
  - [UniDebugger: Hierarchical Multi-Agent Framework for Unified Software Debugging](https://aclanthology.org/2025.emnlp-main.921.pdf)
