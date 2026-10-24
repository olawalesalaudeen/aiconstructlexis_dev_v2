# Attack effectiveness
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Effectiveness, Jailbreak effectiveness  

## State of the Field

Attack effectiveness is conceptualized as the capacity of an adversarial attack to induce unintended model behavior. The provided literature offers two related framings: one paper defines it more broadly as a "latent capacity of an adversarial prompt to successfully override a model's system prompt" ("Transferable Direct Prompt Injection via Activation-Guided MCMC Sampling"), while another frames it more specifically as the ability to make a "web agent to perform a target action" ("WebInject: Prompt Injection Attack to Web Agents"). Across these uses, the construct is consistently operationalized by measuring the success rate of an attack. This is measured as the "probability of generating the desired output" or is "inferred from patterns of attack success across multiple trials and models." For instance, one study evaluates this construct on "five popular LLM models across seven distinct task scenarios" and reports a strong correlation between "lower energy scores in adversarial prompts" and "higher ASR values" ("Transferable Direct Prompt Injection via Activation-Guided MCMC Sampling").

## Sources

**[Transferable Direct Prompt Injection via Activation-Guided MCMC Sampling](https://aclanthology.org/2025.emnlp-main.102.pdf)**
> The latent capacity of an adversarial prompt to successfully override a model's system prompt and induce unintended behavior, inferred from patterns of attack success across multiple trials and models.

**[WebInject: Prompt Injection Attack to Web Agents](https://aclanthology.org/2025.emnlp-main.104.pdf) (as "Effectiveness")**
> The ability of an attack to successfully induce a web agent to perform a target action, measured by the probability of generating the desired output across prompts and monitors.

**[A StrongREJECT for Empty Jailbreaks](https://proceedings.neurips.cc/paper_files/paper/2024/file/e2e06adf560b0706d3b1ddfca9f29756-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Jailbreak effectiveness")**
> The degree to which a jailbreak elicits useful harmful information from a victim model rather than merely a non-refusal or irrelevant response.

## Relationships

### Attack effectiveness →
- **StrongREJECT** (measurements) — *measured_by*
  > "We suggest this problem arises because jailbreak researchers lack a standard, high-quality benchmark for evaluating jailbreak performance" and "We introduce the StrongREJECT benchmark to address these issues."
  - [A StrongREJECT for Empty Jailbreaks](https://proceedings.neurips.cc/paper_files/paper/2024/file/e2e06adf560b0706d3b1ddfca9f29756-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > "We then evaluated the data as if the automated evaluators were regression models predicting the human evaluations."
  - [A StrongREJECT for Empty Jailbreaks](https://proceedings.neurips.cc/paper_files/paper/2024/file/e2e06adf560b0706d3b1ddfca9f29756-Paper-Datasets_and_Benchmarks_Track.pdf)
- **HarmBench** (measurements) — *measured_by*
  > "We used six previous automated evaluators and the concurrently released HarmBench evaluator as baselines against which to compare our StrongREJECT automated evaluator."
  - [A StrongREJECT for Empty Jailbreaks](https://proceedings.neurips.cc/paper_files/paper/2024/file/e2e06adf560b0706d3b1ddfca9f29756-Paper-Datasets_and_Benchmarks_Track.pdf)
