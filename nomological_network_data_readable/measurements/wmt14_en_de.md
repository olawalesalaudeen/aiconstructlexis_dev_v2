# WMT14 en-de
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** WMT14 En-De, WMT-14 en-de  

## State of the Field

**What it is.** Across the papers here, the prevailing usage treats WMT14 en-de as an English-German machine translation benchmark for translating English to German and evaluating translation quality. Definitions in this direction describe it as a benchmark used to evaluate finetuned LLMs on translation, and one study says it considers "the task on translating English to German using WMT14 en-de." A smaller line of work describes it instead as an English-to-German translation dataset used for both training and evaluation in distillation experiments.

**What it is claimed to measure.** In the available relationships, papers use WMT14 en-de to measure Machine translation. It is linked to one behavioral indicator, Machine translation, and to no constructs. The measurement claims are therefore concentrated on a single behavioral indicator rather than spread across multiple linked constructs or behaviors.

**Space of uses.** Papers use it within broader training and evaluation setups, not only as a standalone translation check. One line of work presents it as a downstream task for finetuning, alongside WMT19 English-Chinese for translation and multilingual summarization tasks, while another uses it together with XSum and Natural Instructions for training and evaluation. Another study positions it as a way to evaluate distillation beyond summarization on English-to-German translation.

## Sources

**[On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes](https://proceedings.iclr.cc/paper_files/paper/2024/file/5be69a584901a26c521c2b51e40a4c20-Paper-Conference.pdf)**
> WMT14 en-de is a machine translation benchmark for translating English to German, used to evaluate translation quality.

**[When Scaling Meets LLM Finetuning: The Effect of Data, Model and Finetuning Method](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2ad28981782bb62f025d2893791b629-Paper-Conference.pdf) (as "WMT14 En-De")**
> WMT14 English-German machine translation benchmark used to evaluate finetuned LLMs on translation.

**[On Teacher Hacking in Language Model Distillation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tiapkin25a/tiapkin25a.pdf) (as "WMT-14 en-de")**
> An English-to-German translation dataset used for training and evaluation in the distillation experiments.

## Relationships

### → WMT14 en-de
- **Machine translation** (behaviors tasks) — *measured_by*
  > Specially, we adopt WMT14 English-German (En-De) and WMT19 English-Chinese (En-Zh) (Kocmi et al., 2022) for translation. (Section 2)
  - [When Scaling Meets LLM Finetuning: The Effect of Data, Model and Finetuning Method](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2ad28981782bb62f025d2893791b629-Paper-Conference.pdf)
