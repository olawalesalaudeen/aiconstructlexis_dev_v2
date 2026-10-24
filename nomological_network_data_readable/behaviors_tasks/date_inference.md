# Date inference
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Date deduction, Date calculation, Date arithmetic, Weekday understanding, Date reasoning  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats it as inferring or calculating a calendar date from natural-language descriptions or other context while accounting for calendar structure and date arithmetic. Definitions repeatedly mention contextual clues, relative time offsets, and operations over dates, and one description explicitly includes using facts such as the number of days in February. A smaller line of work frames the task more broadly as reasoning over dates and weekdays to determine valid scheduling windows, with correct interpretation and calculation as the success criterion.

**Variants.** Papers use several nearby names for the behavior, including date deduction, date inference, date calculation, date arithmetic, and weekday understanding. The variants studied range from deduction from contextual clues, to addition or subtraction of days, weeks, or months from a base date, to longer problems involving weekdays, multi-day spans, and scheduling windows.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, BIG-bench. In that usage it is measured through a DateUnderstanding task, described as inferring dates from natural-language descriptions and performing arithmetic operations on dates; no other instrument is linked.

**What it is taken as evidence of.** Papers do not link this behavior to any construct. They therefore do not specify what construct it is taken to indicate.

## Sources

**[StrategyLLM: Large Language Models as Strategy Generators, Executors, Optimizers, and Evaluators for Problem Solving](https://proceedings.neurips.cc/paper_files/paper/2024/file/af7cc9e2366b8f8837a6ef339810277a-Paper-Conference.pdf) (as "Date deduction")**
> Inferring a calendar date from contextual clues and relative time offsets.

**[Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cde328b7bf6358f5ebb91fe9c539745e-Paper-Conference.pdf)**
> Inferring a date from a natural-language description while accounting for calendar structure and date arithmetic.

**[TCP: a Benchmark for Temporal Constraint-Based Planning](https://aclanthology.org/2025.emnlp-main.1142.pdf) (as "Date calculation")**
> Reasoning over calendar dates, weekdays, and multi-day spans to determine valid scheduling windows.

**[Date Fragments: A Hidden Bottleneck of Tokenization for Temporal Reasoning](https://aclanthology.org/2025.emnlp-main.159.pdf) (as "Date arithmetic")**
> The task of performing calculations such as addition or subtraction of days, weeks, or months from a given base date.

**[TCP: a Benchmark for Temporal Constraint-Based Planning](https://aclanthology.org/2025.emnlp-main.1142.pdf) (as "Weekday understanding")**
> The observable task of correctly interpreting and performing calculations involving days of the week and dates.

## Relationships

### Date inference →
- **Date Understanding** (measurements) — *measured_by*
  > “DateUnderstanding—a task that involves inferring dates from natural language descriptions, performing arithmetic operations on dates”
  - [Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cde328b7bf6358f5ebb91fe9c539745e-Paper-Conference.pdf)
