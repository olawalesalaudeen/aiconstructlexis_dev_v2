# Privacy leakage
**Type:** Behavior  
**Referenced in:** 29 papers  
**Also known as:** Sensitive information exposure, System prompt extraction, Fragment inference, Data stealing, Sensitive information leakage, Image-text pair leakage, Good faith disclosure, PII leakage, Information leakage, Training data extraction, PII extraction, Specific PII leakage, Full request leakage, Semantic sensitive information generation, Private information leakage, Prompt extraction, System prompt leakage  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats privacy leakage as observable disclosure of sensitive, private, or personally identifiable information in model outputs. Most definitions count leakage when a model reveals protected content after adversarial prompting, prompt injection, or other manipulation, though some papers describe it under simple natural questions or under a good-faith assumption that any request is trustworthy. Success is variously defined as outputting protected information, reproducing memorized training content, inferring additional hidden fragments from a few known ones, or revealing all or part of a system prompt or access code; a smaller line defines leakage relative to context, such as disclosing information forbidden by a user-defined security policy or in situations where it should be withheld.

**Variants.** Frequently studied variants include prompt or system prompt extraction, PII leakage or extraction, training-data-focused leakage such as training data extraction and fragment inference, and agent-side data stealing or full request leakage. Other papers place the behavior in generated summaries, in reasoning traces as well as final answers, in simple non-adversarial question answering, or in multimodal settings where both a private image and its associated text are exposed.

**Space of elicitation and scores.** Papers link this behavior to 5 measurement instruments, most often Membership inference attack, followed by DecodingTrust, InjecAgent, MUSE, and Mind2Web. These instruments span privacy auditing attacks, benchmarks, and datasets: Membership inference attack is used to evaluate member versus non-member differences and membership leakage, DecodingTrust is used through an Enron email extraction task, InjecAgent tests direct harm and data stealing attacks, MUSE includes no privacy leakage as one of its evaluation properties, and Mind2Web is used for action steps involving diverse PII categories on realistic websites.

**What it is taken as evidence of.** Papers link privacy leakage to 3 constructs. The most common construct-level link is to memorization: papers claim a causal relationship from memorization to privacy leakage, describing leakage as arising when models memorize training data verbatim or when PII embedded in training data can be extracted. Privacy leakage is also used to measure privacy preservation and is otherwise reported as related to it, while one paper reports it is related to generation diversity through reduced leakage risk without compromising diversity.

## Sources

**[Fragments to Facts: Partial-Information Fragment Inference from LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/rosenblatt25a/rosenblatt25a.pdf) (as "Fragment inference")**
> The observable act of using a small set of known text fragments from a training sample to infer additional, unknown fragments from the same sample by querying a model.

**[The Illusion of Role Separation: Hidden Shortcuts in LLM Role Learning (and How to Fix Them)](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ap/wang25ap.pdf) (as "System prompt extraction")**
> An observable attack behavior where the model is manipulated into revealing its confidential system instructions or prompts.

**[AdvAgent: Controllable Blackbox Red-teaming on Web Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25m/xu25m.pdf) (as "Sensitive information exposure")**
> Revealing sensitive information as a result of malicious prompt injection or adversarial manipulation.

**[UDora: A Unified Red Teaming Framework against LLM Agents by Dynamically Hijacking Their Own Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cl/zhang25cl.pdf) (as "Data stealing")**
> The malicious act of accessing and exfiltrating sensitive or private information, such as emails or payment methods.

**[Reasoning Model Unlearning: Forgetting Traces, Not Just Answers, While Preserving Reasoning Skills](https://aclanthology.org/2025.emnlp-main.220.pdf) (as "Sensitive information leakage")**
> The unintended disclosure of hazardous or private knowledge in either final answers or reasoning traces, despite unlearning attempts.

**[Interpretation Meets Safety: A Survey on Interpretation Methods and Tools for Improving LLM Safety](https://aclanthology.org/2025.emnlp-main.1091.pdf)**
> The observable reproduction of sensitive or personally identifiable information from training data in model outputs.

**[Beyond Text: Unveiling Privacy Vulnerabilities in Multi-modal Retrieval-Augmented Generation](https://aclanthology.org/2025.emnlp-main.1259.pdf) (as "Image-text pair leakage")**
> The simultaneous exposure of both a private image and its associated text (e.g., a medical image with its diagnostic caption) from a database.

**[Leaky Thoughts: Large Reasoning Models Are Not Private Thinkers](https://aclanthology.org/2025.emnlp-main.1347.pdf) (as "Good faith disclosure")**
> An observable behavior where a model discloses private information under the naive assumption that any request for data is trustworthy and made in good faith.

**[How Private are Language Models in Abstractive Summarization?](https://aclanthology.org/2025.emnlp-main.1531.pdf) (as "PII leakage")**
> The observable phenomenon where a model includes personally identifiable information from the source document—such as names, ages, locations, or gender—in its generated summary.

**[Keep Security! Benchmarking Security Policy Preservation in Large Language Model Contexts Against Indirect Attacks in Question Answering](https://aclanthology.org/2025.emnlp-main.345.pdf) (as "Information leakage")**
> The observable output behavior in which an LLM discloses confidential information that is explicitly prohibited by a user-defined security policy in the context.

**[Retracing the Past: LLMs Emit Training Data When They Get Lost](https://aclanthology.org/2025.emnlp-main.1789.pdf) (as "Training data extraction")**
> The model reveals memorized training examples in response to adversarial prompts.

**[Proactive Privacy Amnesia for Large Language Models: Safeguarding PII with Negligible Impact on Model Utility](https://proceedings.iclr.cc/paper_files/paper/2025/file/8c234d9c7e738a793947e0282c36eb95-Paper-Conference.pdf) (as "PII extraction")**
> The observable act of a model generating personally identifiable information, such as phone numbers or physical addresses, in response to prompts.

**[EIA: ENVIRONMENTAL INJECTION ATTACK ON GENERALIST WEB AGENTS FOR PRIVACY LEAKAGE](https://proceedings.iclr.cc/paper_files/paper/2025/file/a73474c359ed523e6cd3174ed29a4d56-Paper-Conference.pdf) (as "Specific PII leakage")**
> Causing the agent to enter a user’s specific sensitive field value into an injected malicious element instead of the intended target field.

**[EIA: ENVIRONMENTAL INJECTION ATTACK ON GENERALIST WEB AGENTS FOR PRIVACY LEAKAGE](https://proceedings.iclr.cc/paper_files/paper/2025/file/a73474c359ed523e6cd3174ed29a4d56-Paper-Conference.pdf) (as "Full request leakage")**
> Causing the agent to reveal the entire task request, including sensitive details beyond a single PII field.

**[A Benchmark for Semantic Sensitive Information in LLMs Outputs](https://proceedings.iclr.cc/paper_files/paper/2025/file/994a53df880f1ec64fd5cbf1bba4a8af-Paper-Conference.pdf) (as "Semantic sensitive information generation")**
> The observable act of an LLM producing text that contains semantic sensitive information, particularly in response to simple, non-adversarial prompts.

**[Can LLMs Keep a Secret? Testing  Privacy  Implications of Language Models  via Contextual Integrity Theory](https://proceedings.iclr.cc/paper_files/paper/2024/file/08305d8b2ddab98932c163ea73df065f-Paper-Conference.pdf) (as "Private information leakage")**
> The observable act of disclosing sensitive or private information in a context where it should be withheld.

**[Tensor Trust: Interpretable Prompt Injection Attacks from an Online Game](https://proceedings.iclr.cc/paper_files/paper/2024/file/519c51529c3544b3430bd8b17d400365-Paper-Conference.pdf) (as "Prompt extraction")**
> The observable behavior where an LLM outputs all or part of its system prompt or access code in response to adversarial input.

**[Gandalf the Red: Adaptive Security for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pfister25a/pfister25a.pdf) (as "System prompt leakage")**
> An observable attack outcome where the LLM is manipulated into revealing its confidential system prompt or initial instructions.

## Relationships

### Privacy leakage →
- **Membership inference attack** (measurements) — *measured_by*
  > we develop the first Membership Inference Attack (MIA) for evaluating and auditing the empirical privacy for the problem of LLM steering via activation editing
  - [Differentially Private Steering for Large Language Model Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/45326c2df19fee16fc1ebc44941fea8e-Paper-Conference.pdf)
- **Min-K% method** (measurements) — *measured_by*
  > "M3. PrivLeak, which assesses privacy preservation using the Min-K% method"
  - [Catastrophic Failure of LLM Unlearning via Quantization](https://proceedings.iclr.cc/paper_files/paper/2025/file/ba79fb5c4fe70050752f20c90c5f07ca-Paper-Conference.pdf)
- **Mind2Web** (measurements) — *measured_by*
  > We collect 177 action steps that involve diverse PII categories on realistic websites from the Mind2Web dataset, and conduct experiments using one of the most capable generalist web agent frameworks to date. (Abstract)
  - [EIA: ENVIRONMENTAL INJECTION ATTACK ON GENERALIST WEB AGENTS FOR PRIVACY LEAKAGE](https://proceedings.iclr.cc/paper_files/paper/2025/file/a73474c359ed523e6cd3174ed29a4d56-Paper-Conference.pdf)
- **DecodingTrust** (measurements) — *measured_by*
  > We use the DecodingTrust (Wang et al., 2024) privacy dataset, focusing on the Enron email extraction task. (Section 4.2)
  - [IterGen: Iterative Semantic-aware Structured LLM Generation with Backtracking](https://proceedings.iclr.cc/paper_files/paper/2025/file/3d3a9e085540c65dd3e5731361f9320e-Paper-Conference.pdf)
- **MUSE** (measurements) — *measured_by*
  > We address this issue by proposing MUSE, a comprehensive machine unlearning evaluation benchmark that enumerates six diverse desirable properties for unlearned models: (1) no verbatim memorization, (2) no knowledge memorization, (3) no privacy leakage, (4) utility preservation on data not intended for removal, (5) scalability with respect to the size of removal requests, and (6) sustainability over sequential unlearning requests. (Section 1)
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
- **Min-K% Prob** (measurements) — *measured_by*
  > "To accurately measure the privacy leakage, we employ Min-K% Prob (Shi et al., 2024a) , a state-of-the-art MIA method for LMs based on the loss"
  - [MUSE: Machine Unlearning Six-Way Evaluation for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4556f5398bd2c61bd7500e306b4e560a-Paper-Conference.pdf)
- **InjecAgent** (measurements) — *measured_by*
  > It tests two types of attacks: direct harm attacks ... and data stealing attacks
  - [UDora: A Unified Red Teaming Framework against LLM Agents by Dynamically Hijacking Their Own Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cl/zhang25cl.pdf)
- **LOSS** (measurements) — *measured_by*
  > Table 2 shows that across all three attackers (lossMIA, zlibMIA, and Min-K%), all six unlearning methods and original model (no unlearning), the privacy leakage measure is significantly larger when unlearning canaries and minorities on Enron-Phone dataset for GPT-2 and Llama-2 7B respectively. (Section 6.1)
  - [Underestimated Privacy Risks for Minority Populations in Large Language Model Unlearning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25d/wei25d.pdf)
- **Zlib** (measurements) — *measured_by*
  > Table 2 shows that across all three attackers (lossMIA, zlibMIA, and Min-K%), all six unlearning methods and original model (no unlearning), the privacy leakage measure is significantly larger when unlearning canaries and minorities on Enron-Phone dataset for GPT-2 and Llama-2 7B respectively. (Section 6.1)
  - [Underestimated Privacy Risks for Minority Populations in Large Language Model Unlearning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25d/wei25d.pdf)

### → Privacy leakage
- **Memorization** (constructs) — *causes*
  > there is also growing concern around the privacy risks of their deployment (McCallum, 2023; Bloomberg, 2023; Politico, 2023), because they can memorize some of their training data verbatim
  - [Privacy Auditing of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e76814a0012a46ade4f997591e86f972-Paper-Conference.pdf)

### Associated with
- **Privacy preservation** (constructs)
  > "we evaluate privacy in terms of awareness and leakage"
  - [MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Action grounding** (behaviors tasks)
  > EIA with the MI strategy can attack the action grounding stage of SeeAct and leak users' specific PII
  - [EIA: ENVIRONMENTAL INJECTION ATTACK ON GENERALIST WEB AGENTS FOR PRIVACY LEAKAGE](https://proceedings.iclr.cc/paper_files/paper/2025/file/a73474c359ed523e6cd3174ed29a4d56-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks)
  > it has been shown in (Jiang et al., 2025; Wu et al., 2025) that reasoning traces can carry more sensitive information than final answers (Section 2)
  - [Reasoning Model Unlearning: Forgetting Traces, Not Just Answers, While Preserving Reasoning Skills](https://aclanthology.org/2025.emnlp-main.220.pdf)
