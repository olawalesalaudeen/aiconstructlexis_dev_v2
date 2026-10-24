# Harmful request refusal
**Type:** Behavior  
**Referenced in:** 30 papers  
**Also known as:** Harmful content refusal, Refusal of harmful requests, Harmful query refusal, Safety refusal, Harmful instruction refusal, Harmful prompt refusal  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is an observable refusal to comply with harmful, unsafe, unethical, illegal, or policy-violating requests, usually framed as declining to respond, refusing to fulfill the request, or withholding a substantive answer. AutoBencher: Towards Declarative Benchmark Construction states that a safe model should "abstain from responding to any harmful prompts, by politely declining to provide an answer." A smaller line of work describes this as an underlying disposition to reject harmful instructions, and some papers identify it through refusal phrases such as "I'm sorry" or "I can't," though one paper notes that such openings can still be followed by harmful responses.

**Variants.** Authors use several near-synonymous names for the behavior, including harmful content refusal, refusal of harmful requests, harmful query refusal, harmful instruction refusal, harmful prompt refusal, and safety refusal. The studied requests range from objectionable content and dangerous activities to cryptocurrency scams, fraud, malware, and destructive virus creation, and the behavior is often examined under adversarial or jailbreak prompting. One paper also discusses whether perceived safety refusals generalize to downstream browser agents.

**Space of elicitation and scores.** Papers link this behavior to 4 measurement instruments, in order of frequency AdvBench, HarmBench, SORRY-Bench, and XSTest. These are described as safety datasets, harmful-behavior or safety-refusal benchmarks, and in HarmBench's case an automated red-teaming framework; scoring is often described through ASR, refusal answers detected with rejection keyword sets, or checks for the absence of refusal together with direct addressal of the harmful prompt.

**What it is taken as evidence of.** Papers connect harmful request refusal to 3 constructs, most often Safety alignment, then Alignment, and Harmlessness. Papers do not use a single construct label for it: the prevailing linkage is alignment-centered, with some papers claiming causal relationships from Safety alignment or Alignment to harmful request refusal, another reporting that harmful request refusal is related to Safety alignment, and a smaller line relating the behavior to Harmlessness.

## Sources

**[Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf) (as "Harmful content refusal")**
> Declining to generate content that violates safety policies or requests harmful actions.

**[Robust Prompt Optimization for Defending Language Models Against Jailbreaking Attacks](https://proceedings.neurips.cc/paper_files/paper/2024/file/46ed503889ab232c21c1162340ee17b2-Paper-Conference.pdf) (as "Refusal of harmful requests")**
> The observable action of a language model declining to fulfill a user's request on the grounds that it is harmful, unethical, or against its safety guidelines.

**[Benign Samples Matter! Fine-tuning On Outlier Benign Samples Severely Breaks Safety](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guan25c/guan25c.pdf) (as "Harmful query refusal")**
> The observable behavior of a model explicitly rejecting or declining to respond to a user prompt that is identified as harmful or unsafe.

**[AutoBencher: Towards Declarative Benchmark Construction](https://proceedings.iclr.cc/paper_files/paper/2025/file/eb216114f3eaad22506fd1bc7bbff0ca-Paper-Conference.pdf)**
> The observable behavior of a model declining to provide a substantive response to a prompt that requests harmful, unsafe, or unethical information.

**[Aligned LLMs Are Not Aligned Browser Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/42f92b78a6695f60db0cd38b54d57a41-Paper-Conference.pdf) (as "Safety refusal")**
> The model's underlying disposition to reject instructions that are harmful, malicious, dangerous, illegal, or unethical.

**[Safe Delta: Consistently Preserving Safety when Fine-Tuning LLMs on Diverse Datasets](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lu25g/lu25g.pdf) (as "Harmful instruction refusal")**
> The observable behavior of declining to respond to prompts that are identified as harmful or against usage policies.

**[Activation Space Interventions Can Be Transferred Between Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/oozeer25a/oozeer25a.pdf) (as "Harmful prompt refusal")**
> The observable action of a model declining to provide a substantive response to a prompt identified as harmful or unsafe.

## Relationships

### Harmful request refusal →
- **AdvBench** (measurements) — *measured_by*
  > “we evaluate on the first 80 prompts of AdvBench [51] ‘Harmful Behaviors’ split (Adv 80) with ASR as the safety metric.”
  - [Navigating the Safety Landscape: Measuring Risks in Finetuning Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ada93fa6643735f294be51dc31eebbd4-Paper-Conference.pdf)
- **HarmBench** (measurements) — *measured_by*
  > In the harmful request refusal setting... We use a static set of test cases from HarmBench... to evaluate jailbreak ASR (Section 3.2).
  - [Tamper-Resistant Safeguards for Open-Weight LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc49a629d33bc2461ed7a715ce44da68-Paper-Conference.pdf)
- **XSTest** (measurements) — *measured_by*
  > we compare with XSTest (Röttger et al., 2024) and HarmBench (Mazeika et al., 2024), which are popular safety datasets that evaluate whether a model can accurately reject harmful requests. (Section 5.1).
  - [AutoBencher: Towards Declarative Benchmark Construction](https://proceedings.iclr.cc/paper_files/paper/2025/file/eb216114f3eaad22506fd1bc7bbff0ca-Paper-Conference.pdf)
- **SORRY-Bench** (measurements) — *measured_by*
  > we identify three deficiencies underlying these existing evaluations, and address them with SORRY-Bench2, our proposed systematic benchmark to evaluate LLM safety refusal. (Section 1)
  - [SORRY-Bench: Systematically Evaluating Large Language Model Safety Refusal](https://proceedings.iclr.cc/paper_files/paper/2025/file/9622163c87b67fd5a4a0ec3247cf356e-Paper-Conference.pdf)

### → Harmful request refusal
- **Safety alignment** (constructs) — *causes*
  > During this alignment stage, LLMs learn to reject harmful queries, ensuring their behavior remains well within a defined safety scope. (Section 3.1)
  - [Benign Samples Matter! Fine-tuning On Outlier Benign Samples Severely Breaks Safety](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guan25c/guan25c.pdf)
- **Alignment** (constructs) — *causes*
  > Alignment involves calibrating these models... such that they adhere to human values and safely follow human intents. The resultant aligned LLMs should not engage with user requests on certain unsafe or inappropriate topics... Instead, they provide a refusal response (Section 1)
  - [SORRY-Bench: Systematically Evaluating Large Language Model Safety Refusal](https://proceedings.iclr.cc/paper_files/paper/2025/file/9622163c87b67fd5a4a0ec3247cf356e-Paper-Conference.pdf)

### Associated with
- **Harmlessness** (constructs)
  > The first two responses demonstrate the model’s ability to avoid providing assistance on unethical actions... (Figure 4).
  - [Progressively Label Enhancement for Large Language Model Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25cg/liu25cg.pdf)
