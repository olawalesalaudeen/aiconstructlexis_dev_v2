# Jailbreak prompt generation
**Type:** Behavior  
**Referenced in:** 8 papers  
**Also known as:** Harmful instruction generation, Jailbreak generation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this behavior as generating prompts or instructions meant to elicit harmful, offensive, unsafe, or malicious responses from another LLM. A smaller line of work narrows it to automatically producing a rephrased, robust version of a malicious query that bypasses safety defenses, or to producing adversarial text inputs that preserve malicious intent while circumventing safety alignment. Success is usually described in terms of whether the produced prompt elicits the harmful response, though one paper formalizes it as transforming xmalicious into xjailbreak such that "J(M(xjailbreak), xmalicious) = 1."

**Variants.** Papers use several near-names for the behavior, most commonly harmful instruction generation, alongside jailbreak prompt generation and jailbreak generation. The studied variants include generating a diverse range of malicious instructions, sometimes through adversarial phrasing or role-playing scenarios, and zero-shot chat-LLM setups where generated personas and attributes guide instruction generation. Other formulations treat it as taking a new harmful query and returning a corresponding rephrased robust jailbreak prompt, or as an iterative transformation from a malicious input to a jailbreak input.

**Space of elicitation and scores.** No measurement instrument is linked to it. Papers instead operationalize it directly through generation procedures, such as prompting an LLM to generate harmful instructions or feeding a new harmful query to a fine-tuned generation model that outputs a corresponding rephrased robust jailbreak prompt. One formulation also defines the behavior through whether a transformed input qualifies as xjailbreak under the condition "J(M(xjailbreak), xmalicious) = 1," but this is not linked to a named instrument.

**What it is taken as evidence of.** No construct is linked to it, so papers do not explicitly treat it as evidence of a named construct. Instead, papers place it in causal relationships with other behaviors: one paper claims a causal relationship from Language understanding task performance to Jailbreak prompt generation, citing "advanced language understanding and generation abilities," and another claims a causal relationship from Jailbreak prompt generation to Harmful content generation through carefully designed prompts that make LLMs provide "harmful, discriminatory, violent, or sensitive content."

## Sources

**[HarmAug: Effective Data Augmentation for Knowledge Distillation of Safety Guard Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ac2d4db1615bf3736f44a1b4889e666b-Paper-Conference.pdf) (as "Harmful instruction generation")**
> The observable behavior of an LLM producing prompts or instructions that are designed to elicit harmful, offensive, or malicious responses from another model.

**[One Model Transfer to All: On Robust Jailbreak Prompts Generation against LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124cc3a6e8f563555c8bba9f5ded690f-Paper-Conference.pdf)**
> The automatic generation of a rephrased, robust version of a malicious query designed to bypass safety defenses.

**[An Interpretable N-gram Perplexity Threat Model for Large Language Model Jailbreaks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/boreiko25a/boreiko25a.pdf) (as "Jailbreak generation")**
> Producing adversarial text inputs that preserve malicious intent while circumventing safety alignment to elicit harmful responses from an LLM.

## Relationships

### → Jailbreak prompt generation
- **Natural language understanding** (constructs) — *causes*
  > we can fine-tune an existing language model, turning it into a robust jailbreak prompt generator by leveraging LLMs’ advanced language understanding and generation abilities. (INTRODUCITON)
  - [One Model Transfer to All: On Robust Jailbreak Prompts Generation against LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124cc3a6e8f563555c8bba9f5ded690f-Paper-Conference.pdf)
