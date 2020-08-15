import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="rabotaet though" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("rabotaet though");
  });

  test("after creation span should be displayed", () => {
    const component = create(<ProfileStatus status="damn boy" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation input shouldnt be displayed", () => {
    const component = create(<ProfileStatus status="digigi" />);
    const root = component.root;
    expect(() => {
      root.findByType("input");
    }).toThrow();
  });
  test("after creation span should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="digigi" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("digigi");
  });

  test("input should be displayed in editMode", () => {
    const component = create(<ProfileStatus status="digigi" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("digigi");
  });

  test("callback should be called", () => {
    const mockCallBack = jest.fn();
    const component = create(
      <ProfileStatus status="digigi" updateStatus={mockCallBack} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
