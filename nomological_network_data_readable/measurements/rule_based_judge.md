# Rule-based judge
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Rule-based Judge, Rule-based judgment, Keyword Matching, Keyword matching  

## State of the Field

**What it is.** Across the surveyed papers, the prevailing usage is a rule-based or heuristic evaluation procedure, often described as keyword matching over model outputs. Most definitions say it searches for predefined refusal-related keywords, rejected words, or strings that indicate refusal to comply with a harmful instruction, and uses that to judge whether a jailbreak attack was successful. A smaller line of work describes keyword matching differently, as checking specific keywords in factual-query answers to measure information overlap.

**What it is claimed to measure.** Papers use it primarily to measure Jailbreaking: it is linked to one behavioral indicator, Jailbreaking, and to no constructs. In the recorded relationships, Jailbreaking is measured by the Rule-based judge, and the accompanying descriptions operationalize that judgment through searches for refusal-indicating strings or related rules. The measurement claims therefore converge on jailbreak evaluation rather than spreading across multiple constructs.

**Space of uses.** Papers position it as an automatic evaluator, sometimes alongside other judges and sometimes as the default or a baseline evaluator. Source snippets show it paired with Llama-Guard-2 judgment in one comparison, and with GPT-4 and Llama-3 70B as jailbreak judges in another; elsewhere it is described as the default keyword-matching procedure or as a rule-based baseline. No other measurement instrument is linked to it.

**Concerns raised.** Some authors explicitly describe it as a heuristic that works without semantic understanding, and the surrounding definitions consistently characterize it as relying on predefined rules, keyword matching, or string searches rather than semantic analysis.

## Sources

**[Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks](https://proceedings.iclr.cc/paper_files/paper/2025/file/63fa7efdd3bcf944a4bd6e0ff6a50041-Paper-Conference.pdf)**
> A rule-based evaluation procedure from prior work used to assess whether a response constitutes a jailbreak.

**[Does Refusal Training in LLMs Generalize to the Past Tense?](https://proceedings.iclr.cc/paper_files/paper/2025/file/d432fbe4877ee1a6a51632a18e69784f-Paper-Conference.pdf) (as "Rule-based Judge")**
> A heuristic evaluation procedure that uses predefined rules to detect jailbreaks without semantic understanding.

**[ProAdvPrompter: A Two-Stage Journey to Effective Adversarial Prompting for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/1861027cac475192f2c2cd0ec568fc66-Paper-Conference.pdf) (as "Rule-based judgment")**
> An evaluation method that uses keyword matching to determine if a model's response contains specific rejected words, thereby judging if a jailbreak attack was successful.

**[SORRY-Bench: Systematically Evaluating Large Language Model Safety Refusal](https://proceedings.iclr.cc/paper_files/paper/2025/file/9622163c87b67fd5a4a0ec3247cf356e-Paper-Conference.pdf) (as "Keyword Matching")**
> A rule-based evaluation strategy that checks for the presence of specific refusal-related keywords in a model's response, used as a baseline evaluator.

**[Jailbreaking as a Reward Misspecification Problem](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf00c2fdf92882989b1fc0e3094a2abf-Paper-Conference.pdf) (as "Keyword matching")**
> An evaluation procedure that assesses attack success by automatically searching for predefined strings in a model's output that indicate a refusal to comply with a harmful instruction.

## Relationships

### → Rule-based judge
- **Jailbreaking** (behaviors tasks) — *measured_by*
  > By default, we use keyword matching to search for strings indicating a refusal to respond to the harmful instruction, following Paulus et al. (2024). (Section 5.1)
  - [Jailbreaking as a Reward Misspecification Problem](https://proceedings.iclr.cc/paper_files/paper/2025/file/cf00c2fdf92882989b1fc0e3094a2abf-Paper-Conference.pdf)
