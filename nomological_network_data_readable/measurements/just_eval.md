# Just-Eval
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Most descriptions treat Just-Eval as an evaluation framework or benchmark for scoring model outputs, though one paper also presents it as a dataset of diverse instructions. Across these descriptions, the recurring content is the same five dimensions, helpfulness, clarity, factuality or factual accuracy, depth, and engagement, and one paper says the official prompt is used with GPT-4 scoring each dimension from 1 to 5. Papers also use subsets of the instructions, with examples of 1,000 and 800 diverse instructions.

**What it is claimed to measure.** Across the reported links, Just-Eval is connected to one construct, Helpfulness, and no behavioral indicators are linked to it. Papers use it to measure Helpfulness by evaluating outputs in terms of helpfulness, clarity, factuality, depth, and engagement, and one description explicitly says it is used to measure the helpfulness of edited LLMs. The reported measurement claims therefore center on Helpfulness rather than on multiple constructs.

**Space of uses.** Most usages present Just-Eval as a direct output evaluation: papers score responses on the named dimensions and report Just-Eval scores, often for edited or defended LLM outputs. One described setup uses the official prompt with GPT-4 as evaluator, and papers sample either 1,000 or 800 instructions for evaluation. One paper places it alongside GSM8K in a utility evaluation section, and no other measurement instrument is otherwise linked to it.

## Sources

**[Root Defense Strategies: Ensuring Safety of LLM at the Decoding Level](https://aclanthology.org/2025.acl-long.97.pdf)**
> Evaluation framework that assesses model outputs on dimensions including helpfulness, clarity, factuality, depth, and engagement using GPT-4 as a judge.

## Relationships

### → Just-Eval
- **Helpfulness** (constructs) — *measured_by*
  > Just-Eval evaluates LLMs’ outputs based on helpfulness, clarity, factuality, depth, and engagement.
  - [AGD: Adversarial Game Defense Against Jailbreak Attacks in Large Language Models](https://aclanthology.org/2025.acl-long.851.pdf)
