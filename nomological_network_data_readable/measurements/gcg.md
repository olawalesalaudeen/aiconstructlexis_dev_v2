# GCG
**Type:** Measurement  
**Referenced in:** 38 papers  
**Also known as:** Greedy Coordinate Gradients (GCG), Greedy Coordinate Gradient Descent, nanoGCG, GCG Attack, GCG attack  

## State of the Field

**What it is.** Across the literature, GCG is most commonly described as Greedy Coordinate Gradient, a white-box or gradient-based jailbreak attack that uses greedy coordinate descent or related gradient optimization to craft adversarial prompts. Definitions usually frame the output as an adversarial suffix, sometimes a universal suffix, appended to a harmful query to elicit unsafe or target responses, though one paper describes attack strings prepended to harmful prompts and another treats successful GCG outputs as a filtered set of jailbreak prompts. A smaller line of work refers to nanoGCG as a lightweight variant and to individual or transfer variants of GCG attacks.

**What it is claimed to measure.** Papers link GCG to four constructs and three behavioral indicators. The prevailing measurement use is for robustness-oriented outcomes, especially Adversarial robustness, with additional use for Harmlessness, Jailbreak resistance, and Harmful content detection, while two other robustness-related constructs are also measured by it; overall, the claims spread across several outcomes rather than converging on a single target. Separate from those measurement links, several papers claim a causal relationship from GCG to Jailbreaking, describing suffixes that aim to circumvent safety alignment or maximize compliant responses.

**Space of uses.** The prevailing use is as one of several representative or state-of-the-art jailbreak attacks in evaluation suites, where papers assess defenses or model robustness against GCG alongside PAIR and AutoDAN, and sometimes TAP or DeepInception. Only one other measurement instrument is directly linked to it, CSRT, which one paper reports as related to GCG by comparing CSRT against non-multilingual baselines that include GCG. Other papers use GCG to generate multiple attack strings, universal suffixes, or adversarial prompts for baseline data extraction and filtered prompt sets.

**Concerns raised.** Only a few papers note usage constraints: GCG is repeatedly described as a white-box method that requires access to the target model's gradients, and one paper contrasts it with AutoDAN by stating that it produces unreadable prompts. These remarks focus on access requirements and prompt form.

## Sources

**[Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)**
> Greedy Coordinate Gradient, a white-box jailbreak attack procedure that searches for adversarial suffixes to elicit unsafe responses.

**[Logicbreaks: A Framework for Understanding Subversion of Rule-based Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e2dd37e10bb18ed9d6d488f63094631-Paper-Conference.pdf) (as "Greedy Coordinate Gradients (GCG)")**
> An automated jailbreak algorithm that uses a greedy projected coordinate descent method to find an adversarial suffix of tokens that guides a model towards generating a specific, often undesirable, target output.

**[CROW: Eliminating Backdoors from Large Language Models via Internal Consistency Regularization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/min25b/min25b.pdf) (as "nanoGCG")**
> nanoGCG is a Greedy Coordinate Gradient method used here as a jailbreak evaluation procedure to generate adversarial prompts.

**[TuCo: Measuring the Contribution of Fine-Tuning to Individual Responses of LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/nuti25a/nuti25a.pdf) (as "Greedy Coordinate Gradient Descent")**
> Greedy Coordinate Gradient Descent (GCG), a white-box adversarial jailbreak procedure that generates attack strings prepended to harmful prompts.

**[Safety Alignment Should be Made More Than Just a Few Tokens Deep](https://proceedings.iclr.cc/paper_files/paper/2025/file/88be023075a5a3ff3dc3b5d26623fa22-Paper-Conference.pdf) (as "GCG Attack")**
> A specific implementation of an adversarial suffix attack from Zou et al. (2023b), used to evaluate model robustness.

**[SaLoRA: Safety-Alignment Preserved Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e24d9d028e3c7f6f13e6032919ee021e-Paper-Conference.pdf) (as "GCG attack")**
> An adversarial attack procedure generating universal suffixes to bypass model safety filters and test jailbreak resistance.

## Relationships

### → GCG
- **Jailbreak resistance** (behaviors tasks) — *measured_by*
  > We also evaluate the robustness of R2-Guard against SOTA jailbreak attacks including GCG (Zou et al., 2023), PAIR (Chao et al., 2023), TAP (Mehrotra et al., 2023), and AutoDAN (Liu et al., 2023). (Section 5)
  - [$R^2$-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a07e87ecfa8a651d62257571669b0150-Paper-Conference.pdf)
- **Adversarial robustness** (constructs) — *measured_by*
  > Table 1: General model capability metrics and adversarial robustness (measured as ASR) of three LLMs trained using various safety fine-tuning methods. ... GCG ... PAIR ... AutoDAN ... HumanJailbreaks
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > Table 1 presents a benchmark comparison, displaying harmfulness scores and ASR (attack success rates, shown in brackets) for various defense methods... under several benchmark attacks, including GCG (Section 4.2).
  - [Layer-Level Self-Exposure and Patch: Affirmative Token Mitigation for Jailbreak Attack Defense](https://aclanthology.org/2025.naacl-long.623.pdf)
- **Harmful content detection** (behaviors tasks) — *measured_by*
  > "For safety filtering, SMAAT accurately identified harmful prompts generated by GCG (Zou et al., 2023), achieving 97-100% accuracy."
  - [Explaining the role of Intrinsic Dimensionality in Adversarial Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altinisik25a/altinisik25a.pdf)
- **Robustness** (constructs) — *measured_by*
  > "robustness is assessed via failure rates against the GCG attack"
  - [Explaining the role of Intrinsic Dimensionality in Adversarial Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/altinisik25a/altinisik25a.pdf)

### Associated with
- **CSRT** (measurements)
  > We compare the CSRT to three non-multilingual red-teaming baselines (i.e., GCG (Zou et al., 2023), AutoDAN (Liu et al., 2024), and PAIR (Chao et al., 2025)). (Section 4.3)
  - [Code-Switching Red-Teaming: LLM Evaluation for Safety and Multilingual Understanding](https://aclanthology.org/2025.acl-long.657.pdf)
