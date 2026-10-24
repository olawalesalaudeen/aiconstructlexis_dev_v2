# Red-teaming
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** Red teaming evaluation, Red teaming, Red-teaming assessment  

## State of the Field

**What it is.** Across the papers, the prevailing usage treats red-teaming as an adversarial testing or stress-testing procedure aimed at uncovering safety vulnerabilities, harmful capabilities, biases, or unsafe outputs. Definitions differ, though: some authors describe a manual assessment or a process run by human experts or automated systems, while another use treats it as data generation, for example a set "consisting of 100 harmful examples generated via red-teaming" (Durable Quantization Conditioned Misalignment Attack on Large Language Models). One reported variant evaluates safeguards with 28 test-time adversaries that are variations of fine-tuning attacks.

**What it is claimed to measure.** Papers use red-teaming to evaluate safeguards and expose safety vulnerabilities, and to probe a model's propensity to produce inaccurate, biased, offensive, or unsafe responses. No constructs or behavioral indicators are linked to it.

**Space of uses.** No other measurement instruments are linked to it. Papers position it in several roles: as a step for generating harmful examples for fine-tuning, as an "extensive red teaming" evaluation against test-time adversaries, and as manual or multilingual adversarial probing; one paper also mentions multilingual safety alignment training and red-teaming together.

**Concerns raised.** Methodological discussion focuses on coverage and team composition: one paper highlights the importance of diverse teams for effective red teaming, and another says future multilingual red-teaming should "systematically account for diverse multilingual multi-turn interactions among users."

## Sources

**[Durable Quantization Conditioned Misalignment Attack on Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/376b1b131609e764f687afca832e62b3-Paper-Conference.pdf)**
> A data-generation procedure used to produce harmful examples for fine-tuning the explicitly harmful model.

**[On Evaluating the Durability of Safeguards for Open-Weight LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/9d3a4cdf6f70559e8c6fe02170fba568-Paper-Conference.pdf) (as "Red teaming evaluation")**
> An adversarial testing process used to evaluate a model's safeguards, in this case involving 28 test-time adversaries composed of variations of fine-tuning attacks.

**[Position: Generative AI Regulation Can Learn from Social Media Regulation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/appel25a/appel25a.pdf) (as "Red teaming")**
> An adversarial testing process where a dedicated team actively tries to find and exploit vulnerabilities, biases, or harmful capabilities in a generative AI model.

**[What matters when building vision-language models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/a03037317560b8c5f2fb4b6466d4c439-Paper-Conference.pdf) (as "Red-teaming assessment")**
> A manual adversarial evaluation procedure used to probe inaccurate, biased, offensive, and unsafe model outputs.
