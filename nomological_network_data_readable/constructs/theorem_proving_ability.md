# Theorem proving ability
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Theorem-proving ability, Theorem-proving capability, Out-of-distribution theorem-proving ability  

## State of the Field

**Definition agreement:** Consensus. All papers define theorem proving ability as a model's latent capacity or skill to produce valid formal proofs for mathematical statements in a formal system or proof assistant. The differences are only in wording and setting, such as emphasizing step-by-step generation, proof completion, or benchmarks, not in the core property being measured.

**Space of definitions.** Across the definitions, the prevailing usage treats this as a latent model property: the capacity to find, generate, or complete valid formal proofs for mathematical statements, theorems, or lemmas, usually within a formal system or proof assistant. Some formulations make the proof form more explicit by emphasizing valid, step-by-step proofs, while a narrower variant restricts the construct to out-of-distribution settings, defined as proving theorems that are distributionally distinct from the training data, such as competition-level problems.

**Space of facets.** Papers mostly use the labels ability, skill, capacity, and capability for the same latent property. The main internal distinction is scope: some definitions center on successfully finding proofs for mathematical statements, some on generating or completing proofs across theorem-proving tasks and benchmarks, and one paper names out-of-distribution theorem-proving ability as a narrower subtype defined by theorems that are distributionally distinct from the training data.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to it. The surrounding descriptions place the construct in proof assistant environments and refer to evaluation on theorem-proving benchmarks, including the "challenging Leandojo benchmark," and on an out-of-distribution benchmark, but they do not record a specific operationalization through linked instruments or indicators.

## Sources

**[Learning Formal Mathematics From Intrinsic Motivation](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b8001fc75f0532827472ea5a16af9ca-Paper-Conference.pdf)**
> The latent capacity of the model to successfully find valid proofs for mathematical statements within a formal system.

**[FVEL: Interactive Formal Verification Environment with Large Language Models via Theorem Proving](https://proceedings.neurips.cc/paper_files/paper/2024/file/62c6d7893b13a13c659cb815852dd00d-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Theorem-proving ability")**
> A model's latent skill in generating valid, step-by-step proofs for formal statements or lemmas within a proof assistant environment.

**[Alchemy: Amplifying Theorem-Proving Capability Through Symbolic Mutation](https://proceedings.iclr.cc/paper_files/paper/2025/file/43f55776896a2e33239c2954519f605e-Paper-Conference.pdf) (as "Theorem-proving capability")**
> The latent ability of an LLM to generate or complete formal proofs in a proof assistant across theorem-proving tasks and benchmarks.

**[Alchemy: Amplifying Theorem-Proving Capability Through Symbolic Mutation](https://proceedings.iclr.cc/paper_files/paper/2025/file/43f55776896a2e33239c2954519f605e-Paper-Conference.pdf) (as "Out-of-distribution theorem-proving ability")**
> The model's capability to prove theorems that are distributionally distinct from its training data, such as competition-level problems.
