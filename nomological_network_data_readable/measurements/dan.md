# DAN
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** DoAnythingNow  

## State of the Field

**What it is.** Across the surveyed work, the prevailing usage treats DAN, also called DoAnythingNow, as a benchmark or dataset for safety evaluation: papers describe a benchmark collection of jailbreak-enhanced instructions, or a benchmark for testing resilience against malicious instructions and jailbreak attacks. Some authors narrow it to a specific jailbreaking prompt, with one study using the latest DAN 13.0 prompt as a baseline that overrides AI safety restrictions, and another describing a dataset of forbidden prompts from the Do Anything Now jailbreak family. One paper instead uses the same name for Expose Backdoors on the Way (DAN), a feature-based textual backdoor defense method evaluated against query-triggered and observation-triggered agent backdoors.

**What it is claimed to measure.** In papers that make explicit measurement claims, DAN is used to measure three constructs and no behavioral indicators. The linked constructs are Backdoor vulnerability, Safety, and Safety robustness, so the claims are spread across several constructs rather than centered on one repeated target. Papers use AdvBench and DoAnythingNow to assess safety, report results on the DoAnythingNow benchmark as part of safety evaluation, and in one case treat Backdoor vulnerability as measured by DAN while discussing defense against Query-Attack and Observation-Attack.

**Space of uses.** No paper makes a direct instrument-to-instrument link for DAN, but source snippets often place it alongside other safety evaluations. Papers mention it with STRONGREJECT and JAILBREAKV when evaluating resilience against diverse jailbreak attacks, and with AdvBench both for safety assessment and in one case as part of a prompt mixture where 10% each are from DAN and AdvBench. Across uses, it is positioned variously as a safety benchmark, as a baseline jailbreak prompt used to benchmark another method against an established bypass, and in one study as a defense method evaluated on the WebShop dataset.

## Sources

**[TRIDENT: Enhancing Large Language Model Safety with Tri-Dimensional Diversified Red-Teaming Data Synthesis](https://aclanthology.org/2025.acl-long.733.pdf)**
> A benchmark collection of jailbreak-enhanced instructions used to evaluate a model's resilience against diverse jailbreak attacks.

**[Automatic Expert Discovery in LLM Upcycling via Sparse Interpolated Mixture-of-Experts](https://aclanthology.org/2025.acl-long.816.pdf) (as "DoAnythingNow")**
> Benchmark designed to evaluate model safety by testing resilience against malicious instructions and jailbreak attacks.

## Relationships

### → DAN
- **Safety robustness** (constructs) — *measured_by*
  > use the AdvBench and DoAnythingNow (Shen et al., 2024) datasets to assess the safety of the LLMs. (Section 4.2.2)
  - [LSSF: Safety Alignment for Large Language Models through Low-Rank Safety Subspace Fusion](https://aclanthology.org/2025.acl-long.1479.pdf)
- **Safety** (constructs) — *measured_by*
  > Notably, SIMoE obtains excellent safety evaluation metrics, outperforming Tülu-v3-8B-SFT by 1.7% on Safety (Tab. 2), and a remarkable 10% on the DoAnythingNow (Shen et al., 2024) benchmark in particular (Tab. A9, detailed safety results across sub-datasets). (Section 4.2)
  - [Automatic Expert Discovery in LLM Upcycling via Sparse Interpolated Mixture-of-Experts](https://aclanthology.org/2025.acl-long.816.pdf)
