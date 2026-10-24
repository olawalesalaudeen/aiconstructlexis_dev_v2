# Prometheus
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the papers, the prevailing treatment is as an LLM-based evaluator or open-source LM judge for scoring generated outputs. Most definitions describe it as a model trained to evaluate other language models or for general human preference evaluation in natural language generation, with some papers referring to a later Prometheus variant. The task framing varies across papers: it is used for summaries, literary translation, text-to-SQL assessment, and generated articles, and different definitions name dimensions such as interest, coherence, relevance, coverage, diversity, breadth, depth, and novelty.

**What it is claimed to measure.** Papers use it to score output quality across several task-specific dimensions, but no constructs and no behavioral indicators are explicitly linked to it. The reported targets do not converge on one recurring linked construct: papers describe it as assessing summarization quality, translation quality, text-to-SQL assessment, general human preference evaluation in natural language generation, and article quality through dimensions like relevance, breadth, depth, and novelty.

**Space of uses.** In use, papers position it as an automatic judge for ranking or scoring model outputs. One summarization study uses it for score-based evaluation and says the Prometheus LLM ranks MODS among the best models in summarization quality, while other papers use it to score generated articles or adapt it to text-to-SQL assessment. Papers also discuss it alongside XCOMET, GEMBA-MQM, and EX, but no other measurement instrument is explicitly linked to it.

**Concerns raised.** The concerns that appear are limited: one paper says Prometheus remains untested for literary texts, and another reports that a Prometheus variant showed marginally lower agreement than EX.

## Sources

**[How Good Are LLMs for Literary Translation, Really? Literary Translation Evaluation with Humans and LLMs](https://aclanthology.org/2025.naacl-long.548.pdf)**
> An LLM-based evaluation model used to score the quality of summaries on a 1-5 scale across dimensions like interest, coherence, relevance, coverage, and diversity.
