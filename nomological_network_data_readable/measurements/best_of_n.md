# Best-of-N
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** Best-of-N sampling  

## State of the Field

Across the provided literature, Best-of-N is consistently described as a procedure involving two steps: generating multiple candidate outputs and then selecting the best one based on a scoring mechanism. Some papers define this in the context of question answering, where 'N candidate responses are generated, and the one with the highest predicted correctness score is selected' ("The LLM Already Knows: Estimating LLM-Perceived Question Difficulty via Hidden Representations"), while a more general framing describes it as a 'repeated generation-and-selection procedure' for any type of candidate set ("CondenseLM: LLMs-driven Text Dataset Condensation via Reward Matching"). The procedure is positioned as a method for evaluating certain model traits, with papers using it to measure both `Sycophancy` and `Verification ability`. Furthermore, the application of Best-of-N is reported to influence several downstream outcomes, including `Output quality`, `Citation quality`, and `Commonsense knowledge`. The performance of systems using this procedure is, in turn, evaluated using benchmarks like `MT-Bench`. In the surveyed work, Best-of-N is framed as an 'adaptive reasoning strategy' and is studied alongside other techniques like `Majority voting` and concepts such as `Human preference alignment`.

## Sources

**[The LLM Already Knows: Estimating LLM-Perceived Question Difficulty via Hidden Representations](https://aclanthology.org/2025.emnlp-main.61.pdf)**
> An inference procedure where N candidate responses are generated, and the one with the highest predicted correctness score is selected as the final answer.

**[CondenseLM: LLMs-driven Text Dataset Condensation via Reward Matching](https://aclanthology.org/2025.emnlp-main.65.pdf) (as "Best-of-N sampling")**
> A repeated generation-and-selection procedure that produces multiple candidate condensed subsets and keeps the highest-scoring one.
